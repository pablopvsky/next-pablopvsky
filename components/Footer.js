import Link from "next/link";
import { Footer, Grid, Icon } from "aura-design-system";

const MyFooter = ({ data }) => {
  return (
    <Footer>
      <Grid col="two">
        <div className="one smosh">
          <div className="centertxt-small">
            <Icon className={`p ${data?.footer_logo}`} />
          </div>
          <p className="centertxt-small">{data?.copy_right[0].text}</p>
        </div>
        <div className="two smosh">
          <ul className="nav-list halign">
            {data?.footer_follow_menu.map((item, index) => {
              return (
                <li className="item" key={index}>
                  <a
                    href={item?.footer_follow_link.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Open ${item?.footer_follow_icon}`}
                  >
                    <Icon sprite={item?.footer_follow_icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Grid>
    </Footer>
  );
};

export default MyFooter;
