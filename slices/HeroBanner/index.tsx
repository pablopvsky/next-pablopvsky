import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Banner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerProps>;

const HeroBanner = ({ slice }: HeroBannerProps) => (
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
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </Grid>
    </div>
  </Section>
);

export default HeroBanner;
