import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const HomepageBodyLast_post = ({ data }) => (
  <Section color="blue" container="smash">
    <Section className="centertxt" passDiv>
      <div className="white-text">
        <p>
          Me encanta hablar acerca de las cosas que me gusta, matemáticas, arte,
          literatura, filosofía. Pero escribo de cómo es posible hacer las ideas
          realidad.
        </p>
      </div>
    </Section>
  </Section>
);

export default HomepageBodyLast_post;
