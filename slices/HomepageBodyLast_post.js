import { Section } from "aura-design-system";
import { RichText } from "prismic-reactjs";

const HomepageBodyLast_post = ({ data }) => (
  <Section color="blue" container="smash">
    <Section className="centertxt" passDiv>
      <p className="purple-text">
        {RichText.asText(data.primary.last_post_description)}
      </p>
    </Section>
  </Section>
);

export default HomepageBodyLast_post;
