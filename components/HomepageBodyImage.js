import Section from "aura-design-system/core/section";
import Image from "next/image";

const HomepageBodyImage = ({ ...props }) => (
  <Section className="bg">
    <div className="halo halign floating">
      <Image {...props} />
    </div>
  </Section>
);

export default HomepageBodyImage;
