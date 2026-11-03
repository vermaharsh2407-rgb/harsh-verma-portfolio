import { OffsetLink } from "./OffsetLink";

export function Hero() {
  return (
    <section className="pb-10 pt-[84px] text-center">
      <h1 className="m-0 text-[clamp(2.4rem,8vw,5.2rem)] font-extrabold leading-[1.08] tracking-[-.02em]">
        Crafting videos that actually{" "}
        <span className="mt-[.1em] inline-block rounded-[.3em] bg-pill px-[.22em] text-pilltext">
          hold attention
          <span
            aria-hidden
            className="ml-[.3em] inline-flex h-[.5em] w-[.5em] items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8a3d,#f5c02a)] align-middle"
          >
            <span className="ml-[.08em] h-0 w-0 border-y-[.13em] border-l-[.2em] border-y-transparent border-l-white" />
          </span>
        </span>
      </h1>

      <p className="mx-auto mb-[30px] mt-[26px] max-w-[600px] text-[1.05rem] text-text">
        Reels, ads and brand films for coaches, clinics, founders and growing
        businesses, edited to keep people watching.
      </p>

      <div className="flex flex-wrap justify-center gap-[30px] max-[520px]:gap-[22px]">
        <OffsetLink
          href="#work"
          glow
          className="inline-block px-7 py-[13px]"
        >
          See my work
        </OffsetLink>
      </div>
    </section>
  );
}
