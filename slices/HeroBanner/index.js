import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Section from "aura-design/section";
import Grid from "aura-design/grid";
import Image from "next/image";

const HeroBanner = ({ slice }) => (
  <Section space="p0" container="smesh">
    <div className="bg">
      <Grid col="two">
        <div className="one valign">
          <div className="centertxt pad">
            <h1 className="first-full-width">
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading1: ({ children }) => <span>{children}</span>,
                }}
              />
            </h1>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="two">
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            width={1034}
            height={880}
          />
        </div>
      </Grid>
    </div>
  </Section>
);

export default HeroBanner;
