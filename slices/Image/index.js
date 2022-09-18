import React from "react";
import Section from "aura-design/section";

import NextImage from "@components/Image";

const Image = ({ slice }) => (
  <Section subClassName="bg" space="p0">
    <div className="halo">
      <div className="container floating">
        <NextImage
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
        />
      </div>
    </div>
  </Section>
);

export default Image;
