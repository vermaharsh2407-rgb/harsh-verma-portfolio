const linkClasses =
  "rounded-full px-3.5 py-[9px] text-[.92rem] whitespace-nowrap text-text no-underline hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-[520px]:px-[9px] max-[520px]:text-[.82rem]";

const iconClasses =
  "rounded-full bg-surface2 px-4 py-[9px] text-[1.1rem] leading-none text-text no-underline hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-[520px]:px-[9px] max-[520px]:text-[.82rem]";

export function Dock() {
  return (
    <nav
      aria-label="Page"
      className="fixed bottom-[calc(16px+env(safe-area-inset-bottom,0px))] left-1/2 z-20 flex max-w-[calc(100%-20px)] -translate-x-1/2 items-center gap-1.5 rounded-full border-2 border-line bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] p-[7px] backdrop-blur-md"
    >
      <a
        href="mailto:verma.harsh2407@gmail.com?subject=Video%20editing%20project"
        aria-label="Email me"
        className={iconClasses}
      >
        ✉
      </a>
      <a href="#work" className={linkClasses}>
        Work
      </a>
      <a href="#how" className={linkClasses}>
        Process
      </a>
      <a href="#contact" className={linkClasses}>
        Contact
      </a>
      <a href="tel:+919653020806" aria-label="Call me" className={iconClasses}>
        ☎
      </a>
    </nav>
  );
}
