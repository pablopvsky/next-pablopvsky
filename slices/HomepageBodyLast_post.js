import { Section } from "aura-design-system";
import { RichText } from "prismic-reactjs";

const HomepageBodyLast_post = ({ data }) => (
  <Section color="blue" container="smash">
    <Section className="centertxt" passDiv>
      <div className="white-text">
        {RichText.render(data.primary.last_post_description)}
      </div>
    </Section>
  </Section>
);

export default HomepageBodyLast_post;
