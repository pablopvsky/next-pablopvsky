import { Section } from "aura-design-system";
import { RichText } from "prismic-reactjs";

const HomepageBodyIntro = ({ data, bg }) => (
  <Section
    className="bg centertxt"
    container="smash"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <span className="blue-text">
      {RichText.render(data.primary.intro_title)}
    </span>
    {RichText.render(data.primary.intro_description)}
  </Section>
);

export default HomepageBodyIntro;
