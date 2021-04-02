import Section from "aura-design-system/core/section";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const HomepageBodyHerobanner = ({ locale }) => (
  <Section container="smesh" space="p0">
    <div className="bg">
      <div className="aureole two">
        <div className="one valign">
          <div className="centertxt pad">
            <h1>
              <span>Pablo</span> <br />
              <span className="purple-text">Orozco</span>{" "}
              <span className="blue-text">Montes</span>
            </h1>
            {locale === "en" && <p>Advertiser, Writer, Artist, Programmer.</p>}
            {locale === "es" && (
              <p>Publicista, Escritor, Artista, Programador.</p>
            )}
          </div>
        </div>
        <div className="two">
          <Image
            src="https://images.prismic.io/pablopvsky/206de3ee-a0a1-489b-8a6a-f3b920e91f1e_5eb03355-0b13-4595-b58d-fead1e0eafa0_pablo%2Borozco%2Bmontes%2Bpablopvsky.jpg?auto=compress,format?auto=format&fit=max&w=1200"
            alt="Pablo Orozco Montes"
            width={1034}
            height={880}
          />
        </div>
      </div>
    </div>
  </Section>
);

export default HomepageBodyHerobanner;
