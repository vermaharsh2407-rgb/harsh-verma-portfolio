import type { ComponentProps } from "react";

type OffsetLinkProps = ComponentProps<"a"> & {
  glow?: boolean;
  variant?: "light" | "dark";
};

export function OffsetLink({
  glow = false,
  variant = "light",
  className = "",
  children,
  ...props
}: OffsetLinkProps) {
  const palette =
    variant === "dark"
      ? "border-white bg-transparent text-white"
      : "border-current bg-bg text-text";

  const glowClasses = glow
    ? "hover:border-[#ffd60a] hover:text-[#ffd60a] hover:shadow-[0_0_14px_2px_rgba(255,214,10,.55),0_0_38px_8px_rgba(255,214,10,.3)] focus-visible:border-[#ffd60a] focus-visible:text-[#ffd60a] focus-visible:shadow-[0_0_14px_2px_rgba(255,214,10,.55),0_0_38px_8px_rgba(255,214,10,.3)]"
    : "";

  return (
    <a
      {...props}
      className={`relative isolate border font-semibold no-underline transition-[box-shadow,color,border-color] duration-[250ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${palette} ${glowClasses} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-1.5 translate-y-1.5 border border-current"
      />
      {children}
    </a>
  );
}
