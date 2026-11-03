import { OffsetLink } from "./OffsetLink";

export function ContactSection() {
  return (
    <section id="contact" className="py-14 text-center">
      <h2 className="mb-3 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-.02em]">
        Have footage that needs an edit?
      </h2>
      <p className="m-0 mb-[30px] text-muted">
        Send me a message and I will reply with next steps.
      </p>

      <div className="flex flex-wrap justify-center gap-[30px] max-[520px]:gap-[22px]">
        <OffsetLink
          href="mailto:verma.harsh2407@gmail.com?subject=Video%20editing%20project"
          className="group inline-grid min-w-[16em] px-7 py-[13px] text-center"
        >
          <span className="col-start-1 row-start-1 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
            Email me
          </span>
          <span className="col-start-1 row-start-1 text-[.92em] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            verma.harsh2407@gmail.com
          </span>
        </OffsetLink>

        <OffsetLink
          href="tel:+919653020806"
          className="group inline-grid min-w-[16em] px-7 py-[13px] text-center"
        >
          <span className="col-start-1 row-start-1 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
            Contact me
          </span>
          <span className="col-start-1 row-start-1 text-[.92em] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            +91 9653020806
          </span>
        </OffsetLink>
      </div>
    </section>
  );
}
