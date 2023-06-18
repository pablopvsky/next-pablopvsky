import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Section from "@aura-design/system/section";

export type IntroductionProps = SliceComponentProps<Content.IntroductionProps>;

const Introduction = ({ slice }: IntroductionProps) => {
  const isVariation = slice.variation != "default";
  const subClassNameConnect = [
    "centertxt",
    !isVariation && "bg",
    ["blue"].includes(slice.primary.color) && "black-text",
  ];

  return (
    <Section
      subClassName={subClassNameConnect.join(" ").trim()}
      space="p0"
      container="smesh"
      color={slice.primary.color}
    >
      <div>
        <div className="smash pad">
          {slice.primary.title && (
            <div className="headline">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}
          {slice.primary.description && (
            <PrismicRichText field={slice.primary.description} />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
