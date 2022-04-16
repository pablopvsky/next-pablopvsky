import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image"
import Section from "aura-design/section";
import Grid from "aura-design/grid";

const ScreenshotGallery = ({ slice }) => (
  <Section subClassName="bg">
    <div className="smush">
      <Grid col="two">
        {slice.items.map((item) => {
          console.log(item.link.url)
          return (
            <div className="mod zoom">
              <a
                target="_blank"
                rel="noopener"
                className="halo"
                href={item.link.url}
              >
                <Image
                  src={item.screenshot.url}
                  width={600}
                  height={400}
                />
              </a>
            </div>
          );
        })}
      </Grid>
    </div>
  </Section>
);

export default ScreenshotGallery;
