import { Section } from "aura-design-system"
import Image from "next/image"

const HeroBanner = () => (
  <Section className="bg-circles" container="smesh" space>
      <div className="aureole two">
        <div className="one valign">
          <div className="centertxt pad">
            <h1>
              Pablo <br />
              <span className="purple-text">Orozco</span>{" "}
              <span className="blue-text">Montes</span>
            </h1>
            <p>Publicista, Escritor, Artista, Programador. </p>
          </div>
        </div>
        <div className="two">
          <Image 
            src="https://images.prismic.io/pablopvsky/5eb03355-0b13-4595-b58d-fead1e0eafa0_pablo+orozco+montes+pablopvsky.jpg?auto=compress,format"
            width={400}
            height={350}
          />
        </div>
      </div>
  </Section>
);

export default HeroBanner;
