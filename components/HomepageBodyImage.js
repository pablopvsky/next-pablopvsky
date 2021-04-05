import Section from "aura-design/section";
import Image from "next/image";

const HomepageBodyImage = ({ ...props }) => (
  <Section className="bg">
    <div className="halo halign floating">
      <Image {...props} />
    </div>
  </Section>
);

export default HomepageBodyImage;
