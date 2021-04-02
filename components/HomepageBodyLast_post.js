import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const HomepageBodyLast_post = ({ locale }) => (
  <Section color="blue" container="smash">
    <Section className="centertxt" passDiv>
      <div className="white-text">
        {locale === "en" && (
          <p>
            I love talking about the things I like, math, art, literature,
            philosophy. But I write about how it is possible to make ideas come
            true.
          </p>
        )}
        {locale === "es" && (
          <p>
            Me encanta hablar acerca de las cosas que me gusta, matemáticas,
            arte, literatura, filosofía. Pero escribo de cómo es posible hacer
            las ideas realidad.
          </p>
        )}
      </div>
    </Section>
  </Section>
);

export default HomepageBodyLast_post;
