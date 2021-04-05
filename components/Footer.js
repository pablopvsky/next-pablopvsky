import Link from "next/link";
import Icon from "aura-design/atoms/icon";
import Grid from "aura-design/grid";

const MyFooter = () => {
  return (
    <div>
      <Grid col="two">
        <div className="one smosh">
          <div className="centertxt-small">
            <Icon className={`glyphsSprite  p logo-p`} />
          </div>
          <p className="centertxt-small">
            ©2021 Pablopvsky. Todos los derechos reservados
          </p>
        </div>
        <div className="two smosh">
          <ul className="nav-list halign">
            <li className="item">
              <a
                href="https://www.instagram.com/pablopvsky/"
                target="_blank"
                rel="noopener"
              >
                <Icon sprite="instagram" />
              </a>
            </li>
            <li className="item">
              <a
                href="https://www.twitter.com/pablopvsky/"
                target="_blank"
                rel="noopener"
              >
                <Icon sprite="twitter" />
              </a>
            </li>
            <li className="item">
              <a
                href="https://www.youtube.com/channel/UCSghzBQY3TRlRv3l_T141Qg?view_as=subscriber"
                target="_blank"
                rel="noopener"
              >
                <Icon sprite="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default MyFooter;
