import { Section } from "aura-design-system"
import Image from "next/image"

const Intro = () => (
    <Section className="bg-circles" subClassName="centertxt">
          <Section container="smash">
            <h2 className="blue-text">El Mundo no es tan teso</h2>
            <p>
              Vivo para ser feliz y elimino de forma radical cualquier piedra
              que se me interponga en ese camino a la felicidad.
            </p>
            <p>
              Creo en el conocimiento, en la experiencia, en el respeto, la
              amistad, el placer de servir en crear y en que todo es posible.
            </p>
          </Section>
          <Image 
            className="floating" 
            src="https://images.prismic.io/pablopvsky/5b66ab04-19c3-4755-a103-ec8bd96e9052_figura+pablopvsky.png?auto=compress,format"
            width={400}
            height={400}
          />
    </Section>
);

export default Intro;
