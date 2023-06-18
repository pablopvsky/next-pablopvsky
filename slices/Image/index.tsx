import React from "react";
import Section from "@aura-design/system/section";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ImageProps = SliceComponentProps<Content.ImageProps>;

const Image = ({ slice }: ImageProps) => (
  <Section subClassName="bg" space="p0">
    <div className="halo">
      <div className="mx-auto floating">
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </div>
  </Section>
);

export default Image;
