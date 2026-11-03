import { clients } from "@/data/projects";
import { ViewsCounter } from "./ViewsCounter";

export function ViewsSection() {
  return (
    <section className="py-[30px] text-center">
      <ViewsCounter />
      <span className="text-muted">total views across my edits</span>

      <div
        aria-label="Clients"
        className="mt-[26px] flex flex-wrap justify-center gap-2.5"
      >
        {clients.map((client) => (
          <b
            key={client}
            className="rounded-full border border-line bg-surface px-4 py-[7px] text-[.88rem] font-semibold"
          >
            {client}
          </b>
        ))}
      </div>
    </section>
  );
}
