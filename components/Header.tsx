import Link from "next/link";
import { Section } from "./ui/Section";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div  className="flex justify-between smosh">
        <Link href="/" className="text-xl font-bold font-pablopvsky">
          Pablopvsky
        </Link>
        <a
          href="https://x.com/pablopvsky"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:text-accent-9 transition-colors"
        >
          Follow me on X
        </a>
      </div>
    </header>
  );
};

