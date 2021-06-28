import Image from "next/image";
import Grid from "aura-design/grid";
import Section from "aura-design/section";

const HomepageBodyImage_gallery = ({ locale, ...props }) => {
  return (
    <Section container="smesh" {...props}>
      <Section container="smash" className="centertxt" passDiv>
        {locale === "en" && <h3 className="blue-text">Projects</h3>}
        {locale === "es" && <h3 className="blue-text">Proyectos</h3>}
        {locale === "en" && (
          <p>
            My ideals with the passage of time become a reality, and the
            materialization of these are part of what makes me the most happy.
          </p>
        )}
        {locale === "es" && (
          <p>
            Mis ideales con el paso del tiempo se convierten en una realidad, y
            la materialización de éstas son parte de lo que más me hace feliz.
          </p>
        )}
      </Section>
      <Grid col="two" className="smush">
        <div className="mod zoom">
          <a
            target="_blank"
            rel="noopener"
            className="halo"
            href="https://garitma.com"
          >
            <Image
              src="https://images.prismic.io/pablopvsky/40095eec-d750-447c-9aea-92187965d2a7_sitio-web-garitma.png?auto=compress,format?auto=format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a
            target="_blank"
            rel="noopener"
            className="halo"
            href="https://somosgentedigital.com"
          >
            <Image
              src="https://images.prismic.io/pablopvsky/e96469f5-b477-4041-bc5f-78e3408f387d_somosgentedigital.png?auto=compress,format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a
            target="_blank"
            rel="noopener"
            className="halo"
            href="https://elgaritmatico.com"
          >
            <Image
              src="https://images.prismic.io/pablopvsky/44f5f32e-abe2-479b-bcc6-07f868715324_elgaritmatico.png?auto=compress,format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a
            target="_blank"
            rel="noopener"
            className="halo"
            href="https://auradesignsystem.com"
          >
            <Image
              src="https://images.prismic.io/pablopvsky/db5d12ba-1467-4d8e-bc9a-908e756848b6_auradesignsystem.png?auto=compress,format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
      </Grid>
    </Section>
  );
};

export default HomepageBodyImage_gallery;
