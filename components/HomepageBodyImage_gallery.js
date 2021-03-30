import Image from "next/image";
import Grid from "aura-design-system/core/grid";
import Section from "aura-design-system/core/section";

const HomepageBodyImage_gallery = ({ locale, ...props }) => {
  return (
    <Section container="smesh" {...props}>
      <Section container="smash" className="centertxt" passDiv>
        {locale === "en-US" && <h3 className="blue-text">Projects</h3>}
        {locale === "es-CO" && <h3 className="blue-text">Proyectos</h3>}
        {locale === "en-US" && (
          <p>
            My ideals with the passage of time become a reality, and the
            materialization of these are part of what makes me the most happy.
          </p>
        )}
        {locale === "es-CO" && (
          <p>
            Mis ideales con el paso del tiempo se convierten en una realidad, y
            la materialización de éstas son parte de lo que más me hace feliz.
          </p>
        )}
      </Section>
      <Grid>
        <div className="mod zoom">
          <a target="_blank" rel="noopener" className="halo">
            <Image
              src="https://images.prismic.io/pablopvsky/40095eec-d750-447c-9aea-92187965d2a7_sitio-web-garitma.png?auto=compress,format?auto=format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a target="_blank" rel="noopener" className="halo">
            <Image
              src="https://images.prismic.io/pablopvsky/9d69ab37-ca10-40db-813a-b78aeea26b8e_6914fbbc-25f3-4d97-87ed-051a8e4feac0_proyecto-pablopvsky-somos-gente-digital.jpg?auto=compress,format?auto=format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a target="_blank" rel="noopener" className="halo">
            <Image
              src="https://images.prismic.io/pablopvsky/db5d12ba-1467-4d8e-bc9a-908e756848b6_auradesignsystem.png?auto=compress,format?auto=format&fit=max&w=1200"
              width={650}
              height={330}
            />
          </a>
        </div>
        <div className="mod zoom">
          <a target="_blank" rel="noopener" className="halo">
            <Image
              src="https://images.prismic.io/pablopvsky/b014aa09-61ee-476a-8a9c-9e19c69120f4_a2f4e702-9fb5-4c67-96e8-30ea4ff2d3d4_proyecto-pablopvsky-elgaritmatico.jpg?auto=compress,format?auto=format&fit=max&w=1200"
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
