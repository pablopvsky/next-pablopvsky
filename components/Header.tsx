import Link from "next/link";

export const Header = () => {
  return (
    <header className="letter-line letter-line-0 border-b border-gray-6 pb-1 md:pb-3">
      <p className="letter-meta text-sm tracking-wide text-gray-11">
        A letter from
      </p>
      <Link href="/" className="inline-block">
        <h1 className="letter-brand font-pablopvsky text-accent-12">
          Pablopvsky
        </h1>
      </Link>
      <p className="letter-meta text-sm text-gray-11">
        Advertiser · Head of Operations
      </p>
    </header>
  );
};
