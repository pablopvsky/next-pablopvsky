import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ScreenshotGalleryProps =
  SliceComponentProps<prismic.Content.ScreenshotGallerySlice>;

const ScreenshotGallery = ({ slice }: ScreenshotGalleryProps) => (
  <Section subClassName="bg">
    <div className="smush">
      <Grid col="two">
        {slice.items.map((item, index) => {
          return (
            <div className="mod zoom" key={index}>
              <PrismicNextLink target="_blank" field={item.link}>
                <PrismicNextImage field={item.screenshot} />
              </PrismicNextLink>
            </div>
          );
        })}
      </Grid>
    </div>
  </Section>
);

export default ScreenshotGallery;
