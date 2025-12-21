import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablopvsky - Advertiser & Head of Operations",
    description:
      "Professional Advertiser and Head of Operations at Somos Gente Digital. Expert in operational efficiency and process optimization.",
  },
};

export default function Home() {
  return (
    <div className="font-pablopvsky">
      <Section container="smosh">
        <h1>Pablopvsky</h1>
        <p>
          I'm a professional Advertiser and the Head of Operations at Somos
          Gente Digital. I've been working in the industry for over 10 years. My
          work is defined by a relentless pursuit of operational efficiency and
          process optimization.
        </p>
      </Section>
    </div>
  );
}
