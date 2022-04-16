import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "aura-design/icon";

const Header = ({ text, data, locale }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="aura anchor" style={{ overflow: "hidden" }}>
      <div>
        <Image
          src="https://images.prismic.io/pablopvsky/1a9661c7-496f-40b4-b800-a141e32b88b7_f60ccbfb-5f89-4d38-a592-0397a02696df_pablopvsky-subheader.jpg?auto=compress,format"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="smush wall-pad">
        <ul className="nav-list">
          <li className="item logo-circle">
            <Link href="/">
              <a className="halo">
                <Image
                  src="https://images.prismic.io/pablopvsky/8fcac4e7-6833-4f63-bb4b-abdfd3f38f9d_logo-pablopvsky.png?auto=compress,format&w=96"
                  width={48}
                  height={48}
                  priority={true}
                  alt="Logo Pablopvsky"
                />
              </a>
            </Link>
          </li>
          <li className="z-10">
            <button
              className="button-link mod accents-1 dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <Icon sprite="close" />
              ) : (
                <>
                  {" "}
                  {locale === "en-us" && "EN"}
                  {locale === "es-co" && "ES"}
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="smush anchor">
          <ul className="mod-detail hold top right left bottom aureole one centertxt">
            <div className="aura" />
            <h1 className="mt0 mb0 pablopvsky centertxt z-10">Pablopvsky</h1>
            <li>
              <Link href="/" locale="es-co">
                <a onClick={() => setIsOpen(!isOpen)}>🇨🇴 ES</a>
              </Link>
            </li>
            <li>
              <Link href="/" locale="en-us">
                <a onClick={() => setIsOpen(!isOpen)}>🇺🇸 EN</a>
              </Link>
            </li>
            <li>
              me@pablopvsky.com
            </li>
          </ul>
        </div>
      )}
      <div className="anchor">
        <h1 className="mt0 mb0 pablopvsky centertxt z-10">Pablopvsky</h1>
      </div>
    </header>
  );
};

export default Header;
