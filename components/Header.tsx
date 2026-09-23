import Link from "next/link";

export const Header = () => {
  return (
    <header className="letter-line letter-line-0 border-b border-gray-6 pb-3">
      <p className="text-sm tracking-wide text-gray-11">A letter from</p>
      <Link href="/" className="mt-0.5 inline-block">
        <h1 className="font-pablopvsky text-accent-12">Pablopvsky</h1>
      </Link>
      <p className="mt-1 text-sm text-gray-11">
        Advertiser · Head of Operations
      </p>
    </header>
  );
};
