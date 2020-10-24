import { Section, Image } from "aura-design-system/lib"

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
            placeholder="https://images.prismic.io/pablopvsky/5eb03355-0b13-4595-b58d-fead1e0eafa0_pablo+orozco+montes+pablopvsky.jpg?auto=compress,format&w=10"
            with="1034"
          />
        </div>
      </div>
  </Section>
);

export default HeroBanner;
