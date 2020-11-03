import { Section } from "aura-design-system";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const HomepageBodyHero_one = ({ data, bg }) => (
  <Section
    className="bg"
    subClassName="centertxt"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <Section container="smash">
      <h2 className="blue-text">
        {RichText.asText(data.primary.hero_one_title)}
      </h2>
      {RichText.render(data.primary.hero_one_description)}
    </Section>
    <div className="halign halo">
      <Image
        className="floating figure-down"
        src="https://images.prismic.io/pablopvsky/5b66ab04-19c3-4755-a103-ec8bd96e9052_figura+pablopvsky.png?auto=compress,format"
        width={408}
        height={599}
      />
    </div>
  </Section>
);

export default HomepageBodyHero_one;
