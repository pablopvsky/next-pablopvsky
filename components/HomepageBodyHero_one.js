import Section from "aura-design-system/core/section";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const HomepageBodyHero_one = ({ locale }) => (
  <Section className="bg" subClassName="centertxt">
    <Section container="smash">
      {locale === "en" && (
        <h2 className="blue-text">The world is not that talented</h2>
      )}
      {locale === "es" && (
        <h2 className="blue-text">El Mundo no es tan teso</h2>
      )}
      {locale === "en" && (
        <>
          <p>
            I live to be happy and radically remove any stone that is get in the
            way of happiness.
          </p>
          <p>
            I believe in knowledge, experience, respect, friendship, the
            pleasure of serving and that everything is possible.
          </p>
        </>
      )}
      {locale === "es" && (
        <>
          <p>
            Vivo para ser feliz y elimino de forma radical cualquier piedra que
            se me interponga en el camino a la felicidad.
          </p>
          <p>
            Creo en el conocimiento, en la experiencia, en el respeto, la
            amistad, el placer de servir y en que todo es posible.
          </p>
        </>
      )}
    </Section>
    <div className="halign halo floating">
      <Image
        className="figure-down"
        src="https://images.prismic.io/pablopvsky/5b66ab04-19c3-4755-a103-ec8bd96e9052_figura+pablopvsky.png?auto=compress,format"
        width={408}
        height={599}
      />
    </div>
    <div className="pad" />
  </Section>
);

export default HomepageBodyHero_one;
