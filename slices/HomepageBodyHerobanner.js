import { Section } from "aura-design-system";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const HomepageBodyHerobanner = ({ data, bg }) => (
  <Section container="smesh" space="p0">
    <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="aureole two">
        <div className="one valign">
          <div className="centertxt pad">
            <h1>
              <span>Pablo</span> <br />
              <span className="purple-text">Orozco</span>{" "}
              <span className="blue-text">Montes</span>
            </h1>
            {RichText.render(data.primary.herobanner_subtitle)}
          </div>
        </div>
        <div className="two">
          <Image
            src={data.primary.herobanner_image.url}
            alt={data.primary.herobanner_image.alt}
            width={data.primary.herobanner_image.dimensions.width}
            height={data.primary.herobanner_image.dimensions.height}
          />
        </div>
      </div>
    </div>
  </Section>
);

export default HomepageBodyHerobanner;
