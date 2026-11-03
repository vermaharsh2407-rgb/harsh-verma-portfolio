type SectionHeadingProps = {
  small: string;
  children: React.ReactNode;
};

export function SectionHeading({ small, children }: SectionHeadingProps) {
  return (
    <h2 className="m-0 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-.02em]">
      <small className="block text-[.5em] font-semibold text-muted">
        {small}
      </small>
      <i className="block pl-[1.2em] underline decoration-accent decoration-wavy decoration-2 underline-offset-[.15em]">
        {children}
      </i>
    </h2>
  );
}
