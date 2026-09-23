export const Footer = () => {
  return (
    <footer className="letter-line letter-line-6 mt-2.5 flex flex-col gap-0.5 border-t border-gray-6 pt-1.5 md:mt-5 md:gap-1 md:pt-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="letter-meta text-sm text-gray-11">
        Pablo O. (
        <a
          href="https://x.com/pablopvsky"
          target="_blank"
          rel="noopener noreferrer"
          className="letter-link text-accent-9 underline decoration-accent-a6 underline-offset-4 transition-colors hover:text-accent-11"
        >
          pablopvsky
        </a>
        )
      </span>
      <div className="flex gap-1.5 text-sm md:gap-2">
        <a
          href="https://x.com/pablopvsky"
          target="_blank"
          rel="noopener noreferrer"
          className="letter-link text-gray-11 underline decoration-gray-a6 underline-offset-4 transition-colors hover:text-accent-9"
        >
          Follow on X
        </a>
        <a
          href="https://github.com/pablopvsky/next-pablopvsky"
          target="_blank"
          rel="noopener noreferrer"
          className="letter-link text-gray-11 underline decoration-gray-a6 underline-offset-4 transition-colors hover:text-accent-9"
        >
          Source
        </a>
      </div>
    </footer>
  );
};
