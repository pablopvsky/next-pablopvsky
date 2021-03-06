import Section from "aura-design/section";
import { RichText } from "prismic-reactjs";

const HomepageBodyIntro = ({ locale }) => (
  <Section className="bg centertxt" container="smash">
    {locale === "en" && <h3 className="blue-text">It is a promise</h3>}
    {locale === "es" && <h3 className="blue-text">Es una promesa</h3>}
    {locale === "en" && (
      <p>
        We are all exposed to error, but it is those mistakes that make us doubt
        and grow.
      </p>
    )}
    {locale === "es" && (
      <p>
        Todos estamos expuestos al error, pero son de esos errores los que nos
        hacen dudar y crecer.
      </p>
    )}
  </Section>
);

export default HomepageBodyIntro;
