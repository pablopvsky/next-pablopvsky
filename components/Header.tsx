import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@aura-design/system/icon";
import { Cross1Icon } from "@radix-ui/react-icons";

type HeaderProps = {
  locale: string;
}

const Header = ({ locale }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="aura anchor" style={{ overflow: "hidden" }}>
      <div>
        <Image
          src="https://images.prismic.io/pablopvsky/1a9661c7-496f-40b4-b800-a141e32b88b7_f60ccbfb-5f89-4d38-a592-0397a02696df_pablopvsky-subheader.jpg?auto=compress,format"
          priority={true}
          alt="Pablopvsky"
          className="object-cover object-center w-full h-full"
          fill
        />
      </div>
      <div className="smush wall-pad">
        <ul className="nav-list">
          <li className="item"></li>
          <li className="z-10">
            <button
              className="button-link mod"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <Cross1Icon className="icon" />
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
              <Link href="/" locale="es-co" onClick={() => setIsOpen(!isOpen)}>
                🇨🇴 ES
              </Link>
            </li>
            <li>
              <Link href="/" locale="en-us" onClick={() => setIsOpen(!isOpen)}>
                🇺🇸 EN
              </Link>
            </li>
            <li>me@pablopvsky.com</li>
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
