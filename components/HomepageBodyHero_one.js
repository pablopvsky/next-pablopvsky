import Section from "aura-design-system/core/section";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const HomepageBodyHero_one = () => (
  <Section className="bg" subClassName="centertxt">
    <Section container="smash">
      <h2 className="blue-text">El Mundo no es tan teso</h2>
      <p>
        Vivo para ser feliz y elimino de forma radical cualquier piedra que se
        me interponga en el camino a la felicidad.
      </p>
      <p>
        Creo en el conocimiento, en la experiencia, en el respeto, la amistad,
        el placer de servir y en que todo es posible.
      </p>
    </Section>
    <div className="halign halo">
      <Image
        className="floating figure-down"
        src="https://images.prismic.io/pablopvsky/5b66ab04-19c3-4755-a103-ec8bd96e9052_figura+pablopvsky.png?auto=compress,format"
        width={408}
        height={599}
      />
    </div>
    <div className="pad" />
  </Section>
);

export default HomepageBodyHero_one;
