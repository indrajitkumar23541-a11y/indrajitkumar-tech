import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function for conditionally merging Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with optional sign and locale string formatting.
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}
