import { Section } from "aura-design-system";
import Image from "next/image";

const HomepageBodyImage = ({ data, bg }) => (
  <Section className="bg" style={{ backgroundImage: `url(${bg})` }}>
    <div className="halo halign">
      <Image
        src={data.primary.image.url}
        alt={data.primary.image.alt}
        width={data.primary.image.dimensions.width}
        height={data.primary.image.dimensions.height}
        className="floating"
      />
    </div>
  </Section>
);

export default HomepageBodyImage;
