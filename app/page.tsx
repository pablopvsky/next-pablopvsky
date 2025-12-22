import type { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/utils/class-names";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pablopvsky - Advertiser & Head of Operations",
  description:
    "Professional Advertiser and Head of Operations at Somos Gente Digital. Expert in operational efficiency and process optimization.",
  openGraph: {
    title: "Pablopvsky - Advertiser & Head of Operations",
    description:
      "Professional Advertiser and Head of Operations at Somos Gente Digital. Expert in operational efficiency and process optimization.",
    type: "website",
    locale: "en_US",
    url: "https://pablopvsky.com", // You should update this with your actual domain
    siteName: "Pablopvsky",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pablopvsky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablopvsky - Advertiser & Head of Operations",
    description:
      "Professional Advertiser and Head of Operations at Somos Gente Digital. Expert in operational efficiency and process optimization.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <div className="font-pablopvsky">
      <Header />
      <Section
        container="smosh"
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--gray-6)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--gray-6)_1px,transparent_1px)]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--gray-1)] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-[var(--gray-1)]"></div>
        <div className="relative z-10 pt-5">
          <p>
            I'm a professional Advertiser and the Head of Operations at{" "}
            <a
              href="https://somosgentedigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-9 underline"
            >
              Somos Gente Digital
            </a>
            . I've been working in the industry for over 10 years. My work is
            defined by a relentless pursuit of operational efficiency and
            process optimization.
          </p>
        </div>
        <Image
          src="/images/keyvisual.png"
          alt="Pablopvsky"
          width={1000}
          height={1000}
        />
      </Section>
      <Footer />
    </div>
  );
}
