import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const HomepageBodyIntro = ({ data, bg }) => (
  <Section className="bg centertxt" container="smash">
    <h3 className="blue-text">Es una promesa</h3>
    Todos estamos expuestos al error, pero son de esos errores los que nos hacen
    dudar y crecer.
  </Section>
);

export default HomepageBodyIntro;
