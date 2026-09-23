export const Footer = () => {
  return (
    <footer className="letter-line letter-line-6 mt-5 flex flex-col gap-1 border-t border-gray-6 pt-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-gray-11">
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
      <div className="flex gap-2 text-sm">
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
