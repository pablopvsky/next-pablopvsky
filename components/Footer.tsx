const projectLinkClassName =
  "letter-link text-accent-9 underline decoration-accent-a6 underline-offset-4 transition-colors hover:text-accent-11";

const footerLinkClassName =
  "letter-link text-gray-11 underline decoration-gray-a6 underline-offset-4 transition-colors hover:text-accent-9";

const projects = [
  {
    href: "https://somosgentedigital.com",
    label: "Somos Gente Digital",
  },
  { href: "https://garitma.com", label: "Garitma" },
  { href: "https://font.pablopvsky.com", label: "Font" },
  { href: "https://shadcn.com/", label: "shadcn" },
] as const;

export const Footer = () => {
  return (
    <footer className="letter-line letter-line-6 mt-1.5 flex flex-col gap-0.5 border-t border-gray-6 pt-1 md:mt-3 md:gap-1 md:pt-3">
      <p className="letter-meta flex flex-wrap items-baseline gap-x-1 gap-y-0.5 text-sm text-gray-11">
        <span>Projects</span>
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={projectLinkClassName}
          >
            {project.label}
          </a>
        ))}
      </p>
      <div className="flex flex-row flex-wrap items-center justify-between gap-x-1.5 gap-y-0.5 md:gap-1">
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
