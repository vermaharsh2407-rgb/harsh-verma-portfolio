import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Brief",
    description: "Share the goal, audience and raw footage.",
  },
  {
    title: "First cut",
    description: "I edit the hook, pacing, captions and sound.",
  },
  {
    title: "Revisions",
    description: "You send feedback and I refine the edit.",
  },
  {
    title: "Delivery",
    description: "Final files in the formats each platform needs.",
  },
];

export function ProcessSection() {
  return (
    <section id="how" className="py-14">
      <SectionHeading small="How we">Work together</SectionHeading>

      <div className="relative ml-3.5 mt-[34px] grid gap-[18px] border-l-[3px] border-accent pl-[34px]">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-[18px] bg-surface px-6 py-5"
          >
            <span
              aria-hidden
              className="absolute -left-[46px] top-[26px] h-4 w-4 rounded-full bg-accent"
            />
            <span className="absolute right-5 top-0.5 text-[3.4rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_var(--line)]">
              {index + 1}
            </span>
            <b className="block text-[1.25rem] text-accent">{step.title}</b>
            <span className="text-muted">{step.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
