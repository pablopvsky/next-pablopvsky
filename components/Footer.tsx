const projectLinkClassName =
  "letter-link h6 w-fit leading-tight text-gray-12 underline decoration-accent-8 underline-offset-4 transition-colors hover:text-accent-11 hover:decoration-accent-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8";

const footerLinkClassName =
  "letter-link text-gray-11 underline decoration-gray-a6 underline-offset-4 transition-colors hover:text-accent-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8";

const projects = [
  {
    href: "https://somosgentedigital.com",
    label: "Somos Gente Digital",
    description: "The digital agency where I am Head of Operations.",
  },
  {
    href: "https://garitma.com",
    label: "Garitma",
    description: "Poetry, on its own site.",
  },
  {
    href: "https://font.pablopvsky.com",
    label: "Font",
    description: "My typeface, pablopvsky, with a download.",
  },
] as const;

export const Footer = () => {
  return (
    <footer className="letter-line letter-line-6 mt-1.5 flex flex-col gap-2 border-t border-gray-6 pt-1.5 md:mt-3 md:gap-3 md:pt-3">
      <nav aria-label="Projects" className="flex flex-col gap-1.5">
        <p className="letter-meta text-sm text-gray-11">Projects</p>
        <ul className="flex flex-col gap-3 md:gap-4">
          {projects.map((project) => (
            <li key={project.href} className="flex flex-col gap-0.5">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={projectLinkClassName}
              >
                {project.label}
              </a>
              <p className="text-gray-11">{project.description}</p>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row flex-wrap items-center justify-between gap-x-1.5 gap-y-0.5 md:gap-1">
        <span className="letter-meta text-sm text-gray-11">
          Pablo O. (
          <a
            href="https://x.com/pablopvsky"
            target="_blank"
            rel="noopener noreferrer"
            className="letter-link text-accent-9 underline decoration-accent-a6 underline-offset-4 transition-colors hover:text-accent-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8"
          >
            pablopvsky
          </a>
          )
        </span>
        <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-sm md:gap-x-2">
          <a
            href="https://x.com/pablopvsky"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClassName}
          >
            Follow on X
          </a>
          <a
            href="https://www.linkedin.com/in/pablopvsky"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClassName}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pablopvsky/next-pablopvsky"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClassName}
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
};
