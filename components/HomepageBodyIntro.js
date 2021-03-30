import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const HomepageBodyIntro = ({ locale }) => (
  <Section className="bg centertxt" container="smash">
    {locale === "en-US" && <h3 className="blue-text">It is a promise</h3>}
    {locale === "es-CO" && <h3 className="blue-text">Es una promesa</h3>}
    {locale === "en-US" && (
      <p>
        Todos estamos expuestos al error, pero son de esos errores los que nos
        hacen dudar y crecer.
      </p>
    )}
    {locale === "es-CO" && (
      <p>
        We are all exposed to error, but it is those mistakes that make us doubt
        and grow.
      </p>
    )}
  </Section>
);

export default HomepageBodyIntro;
