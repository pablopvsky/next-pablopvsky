import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pablopvsky — Advertiser & Head of Operations",
  description:
    "A short letter from Pablo O. (pablopvsky): Advertiser and Head of Operations at Somos Gente Digital.",
  openGraph: {
    title: "Pablopvsky — Advertiser & Head of Operations",
    description:
      "A short letter from Pablo O. (pablopvsky): Advertiser and Head of Operations at Somos Gente Digital.",
    type: "website",
    locale: "en_US",
    url: "https://pablopvsky.com",
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
    title: "Pablopvsky — Advertiser & Head of Operations",
    description:
      "A short letter from Pablo O. (pablopvsky): Advertiser and Head of Operations at Somos Gente Digital.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <main className="letter-scene font-pablopvsky text-gray-12">
      <Section
        container="smosh"
        className="letter-section relative flex min-h-dvh items-center justify-center"
        subClassName="w-full"
      >
        <article className="letter-sheet mx-auto w-full max-w-2xl bg-gray-2 px-2 py-2.5 md:px-5 md:py-6">
          <Header />

          <div className="letter-body mt-2 space-y-1 md:mt-4 md:space-y-2">
            <p className="letter-line letter-line-1 text-gray-11">Hello,</p>
            <p className="letter-line letter-line-2">
              I&apos;m a professional Advertiser and the Head of Operations at{" "}
              <a
                href="https://somosgentedigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="letter-link text-accent-9 underline decoration-accent-a6 underline-offset-4 transition-colors hover:text-accent-11"
              >
                Somos Gente Digital
              </a>
              . I&apos;ve been working in the industry for over 10 years. My work
              is defined by a relentless pursuit of operational efficiency and
              process optimization.
            </p>
            <p className="letter-line letter-line-3">
              This page is a short letter from me — no pitch deck, just a place
              to say hello and point you toward where I write and ship.
            </p>
            <p className="letter-line letter-line-4 mt-1.5 text-gray-11 md:mt-3">
              With care,
            </p>
            <p className="letter-line letter-line-5 mt-0.5 font-pablopvsky text-accent-12 md:mt-1">
              Pablo O.
            </p>
          </div>

          <Footer />
        </article>
      </Section>
    </main>
  );
}
