import Link from "next/link";
import Image from "next/image";
import { Section, Grid } from "aura-design-system";
import { RichText } from "prismic-reactjs";

const HomepageBodyImage_gallery = ({ data, ...props }) => {
  return (
    <Section container="smesh" {...props}>
      <Section container="smash" className="centertxt" passDiv>
        <span className="blue-text">
          {RichText.render(data.primary.column_gallery_title)}
        </span>
        {RichText.render(data.primary.column_gallery_description)}
      </Section>
      <Grid>
        {data.fields.map((item, index) => (
          <div key={index}>
            <div className="mod zoom">
              <Link href={item?.column_gallery_image_item.url}>
                <a
                  aria-label={item.column_gallery_image.alt}
                  target={item?.column_gallery_image_item?.target}
                  rel={
                    item.column_gallery_image_item?.__typename ===
                    "_ExternalLink"
                      ? "noopener"
                      : ""
                  }
                >
                  <Image
                    src={item.column_gallery_image.url}
                    alt={item.column_gallery_image.alt}
                    width={650}
                    height={330}
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  );
};

export default HomepageBodyImage_gallery;
