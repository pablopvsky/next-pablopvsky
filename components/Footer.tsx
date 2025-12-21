export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 py-4">
      <div className="flex justify-between smosh">
        <span className="text-sm font-medium">Pablo O. (<a href="https://x.com/pablopvsky" target="_blank" rel="noopener noreferrer" className="text-accent-9 underline">pablopvsky</a>)</span>
        <a
          href="https://github.com/pablopvsky/next-pablopvsky"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          Source
        </a>
      </div>
    </footer>
  );
};

