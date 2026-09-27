import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data";
import { CaseStudyView } from "@/components/projects/CaseStudyView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | INDRA OS",
    };
  }

  const title = `${project.name} — Engineering Case Study | Indrajit Kumar`;
  const description = `${project.tagline}. In-depth engineering case study covering system architecture, tradeoffs, challenges, and stack.`;

  return {
    title,
    description,
    keywords: [
      project.name,
      project.codename || "",
      ...project.technologies,
      "Indrajit Kumar",
      "INDRA OS",
      "Software Architecture",
      "Case Study",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "INDRA OS — Indrajit Kumar",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
