import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ScreenshotGalleryProps =
  SliceComponentProps<Content.ScreenshotGalleryProps>;

const ScreenshotGallery = ({ slice }: ScreenshotGalleryProps) => (
  <Section subClassName="bg">
    <div className="smush">
      <Grid col="two">
        {slice.items.map((item, index) => {
          return (
            <div className="mod zoom" key={index}>
              <a
                target="_blank"
                rel="noopener"
                className="halo"
                href={item.link.url}
              >
                 <PrismicNextImage field={item.screenshot} />
              </a>
            </div>
          );
        })}
      </Grid>
    </div>
  </Section>
);

export default ScreenshotGallery;
