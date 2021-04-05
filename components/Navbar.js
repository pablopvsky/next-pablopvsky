import { useState } from "react";
import Link from "next/link";
import Icon from "aura-design/atoms/icon";

const MyNavbar = ({ text, data, locale }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="aura"
      style={{
        backgroundImage: `url(https://images.prismic.io/pablopvsky/1a9661c7-496f-40b4-b800-a141e32b88b7_f60ccbfb-5f89-4d38-a592-0397a02696df_pablopvsky-subheader.jpg?auto=compress,format)`,
      }}
    >
      <div className="smush aura">
        <ul className="nav-list">
          <li className="item logo-circle">
            <Link href="/">
              <a aria-label="Logo">
                <Icon className="glyphsSprite  p logo" />
              </a>
            </Link>
          </li>
          <li className="">
            <button
              className="button-link mod accents-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {locale === "en" && "EN"}
              {locale === "es" && "ES"}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="smush anchor">
          <ul className="mod-detail pin right aureole one v-list lefttxt">
            <li>
              <Link href="/" locale="es">
                <a onClick={() => setIsOpen(!isOpen)}>🇨🇴 ES</a>
              </Link>
            </li>
            <li>
              <Link href="/" locale="en">
                <a onClick={() => setIsOpen(!isOpen)}>🇺🇸 EN</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div>
        <h1 className="light pablopvsky centertxt">Pablopvsky</h1>
      </div>
    </header>
  );
};

export default MyNavbar;
