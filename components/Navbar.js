import Link from "next/link";
import { Navbar, Header, Menu, Icon, Button } from "aura-design-system";

const MyNavbar = ({ text, data }) => {
  return (
    <>
      <Navbar>
        <ul className="nav-list">
          <li className="item logo">
            <Link href="/">
              <a aria-label="Logo">
                <Icon className={`p ${data?.logo}`} />
              </a>
            </Link>
          </li>
          <li className="item"></li>
        </ul>
      </Navbar>
      <Header
        text={text}
        style={{ backgroundImage: `url(${data?.subheader_cover?.url})` }}
      ></Header>
    </>
  );
};

export default MyNavbar;
