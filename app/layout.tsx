import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Madhava Bobbili — Software Engineer, AI Enthusiast",
  description:
    "Madhava Bobbili — Computer Science Engineering student building full-stack web apps and AI-powered tools with the MERN stack, Python, and LLM APIs. Open to Software Engineer Intern (AI Engineer) roles.",
  keywords: [
    "Madhava Bobbili",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "AI Engineer",
    "React Developer",
    "Node.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Madhava Bobbili — Software Engineer, AI Enthusiast",
    description:
      "Full-stack developer exploring AI-powered tools with Python and the MERN stack. Building intelligent, scalable platforms.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Madhava Bobbili — Software Engineer, AI Enthusiast",
    description:
      "Full-stack developer exploring AI-powered tools with Python and the MERN stack.",
  },
};

export const viewport = {
  themeColor: "#05060a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Madhava Bobbili",
  jobTitle: "Software Engineer Intern (AI Engineer)",
  sameAs: [
    "https://www.linkedin.com/in/madhava-bobbili",
    "https://github.com/25a35a0512",
    "https://leetcode.com/u/25a35a0512/",
  ],
  email: "mailto:madhavabobbili@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Loader />
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
