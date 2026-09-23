import Link from "next/link";

export const Header = () => {
  return (
    <header className="letter-line letter-line-0 border-b border-gray-6 pb-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-wide text-gray-11">A letter from</p>
          <Link href="/" className="block">
            <h1 className="font-pablopvsky text-accent-12">Pablopvsky</h1>
          </Link>
        </div>
        <p className="text-sm text-gray-11 sm:text-right">
          Advertiser · Head of Operations
        </p>
      </div>
    </header>
  );
};
