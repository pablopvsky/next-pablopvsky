import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";
import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";

const Footer = () => {
  return (
    <div className="pad">
      <Grid col="two">
        <div className="one smosh">
          <div className="centertxt-small">
            <span className="light pablopvsky centertxt h4">Pablopvsky</span>
          </div>
          <p className="centertxt-small">
            ©2023 Pablopvsky. Todos los derechos reservados
          </p>
        </div>
        <div className="two smosh">
          <ul className="nav-list halign dark">
            <li className="item">
              <Button
                mode="link"
                href="https://github.com/pablopvsky"
                target="_blank"
        
              >
                <GitHubLogoIcon className="icon" />
              </Button>
            </li>
            <li className="item">
              <Button
                mode="link"
                href="https://github.com/pablopvsky"
                target="_blank"
        
              >
                <TwitterLogoIcon className="icon" />
              </Button>
            </li>
            <li className="item">
              <Button
                mode="link"
                href="https://www.linkedin.com/in/pablopvsky/"
                target="_blank"
        
              >
                <LinkedInLogoIcon className="icon" />
              </Button>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;
