import { NextResponse, type NextRequest } from "next/server";

// Rate limiting map: client IP -> timestamps of requests
const ipRequestHistory = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Email regex pattern for RFC 5322 compliance
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function sanitizeInput(str: string): string {
  return str
    .replace(/[<>]/g, "") // strip angle brackets
    .trim();
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const history = ipRequestHistory.get(ip) || [];

  // Filter out timestamps outside the sliding window
  const recentHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentHistory.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestHistory.set(ip, recentHistory);
    return false; // Rate limit exceeded
  }

  recentHistory.push(now);
  ipRequestHistory.set(ip, recentHistory);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // Rate Limit Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Too many dispatches from this terminal. Please wait a few minutes.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, hp } = body;

    // Honeypot spam check (bots will auto-fill hp)
    if (hp) {
      // Fake success for bots
      return NextResponse.json({
        success: true,
        message: "Transmission received.",
      });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Sender name is required and must contain at least 2 characters.",
        },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "A valid email address is required for dispatch acknowledgment.",
        },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Transmission payload must contain at least 10 characters.",
        },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          error: "Transmission payload exceeds maximum allowed capacity (3,000 characters).",
        },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name).slice(0, 100),
      email: sanitizeInput(email).slice(0, 100),
      subject: subject && typeof subject === "string" ? sanitizeInput(subject).slice(0, 150) : "General Inquiry",
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
      originIp: ip,
    };

    // Log received transmission telemetry safely
    console.log(
      `[INDRA OS DISPATCH] Received transmission from ${sanitizedData.name} <${sanitizedData.email}> at ${sanitizedData.timestamp}: "${sanitizedData.subject}"`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Transmission successfully recorded and queued in INDRA OS communications log.",
        transmissionId: `DISPATCH-${Date.now().toString(36).toUpperCase()}`,
        timestamp: sanitizedData.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INDRA OS DISPATCH ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "System gateway communication failure. Please use direct email link instead.",
      },
      { status: 500 }
    );
  }
}
