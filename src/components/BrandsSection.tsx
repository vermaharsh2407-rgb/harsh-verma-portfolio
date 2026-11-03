import Image from "next/image";
import { brands } from "@/data/brands";
import { SectionHeading } from "./SectionHeading";

export function BrandsSection() {
  return (
    <section id="brands" className="py-14">
      <SectionHeading small="Brands I've">Helped grow</SectionHeading>

      <div className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-surface p-[18px] md:[&:nth-child(3n+2)]:translate-y-4"
          >
            <div className="flex items-center gap-3.5">
              {brand.avatar ? (
                <Image
                  src={brand.avatar}
                  alt={brand.name}
                  width={64}
                  height={64}
                  sizes="64px"
                  className="h-16 w-16 flex-none rounded-full border-2 border-line object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="grid h-16 w-16 flex-none place-items-center rounded-full border-2 border-line bg-[linear-gradient(135deg,#f5a02a,#b9501a)] text-[1.2rem] font-extrabold text-[#0b0b0b]"
                >
                  CE
                </div>
              )}

              <div>
                <div className="font-bold leading-[1.25]">
                  {brand.name}
                  {brand.verified ? (
                    <span
                      title="Verified"
                      className="ml-1 inline-grid h-[1.15em] w-[1.15em] place-items-center rounded-full bg-[#2f8cff] align-middle text-[.68rem] text-white"
                    >
                      ✓
                    </span>
                  ) : null}
                </div>
                <div className="text-[.85rem] text-muted">{brand.meta}</div>
              </div>
            </div>

            <div className="text-[1.6rem] font-extrabold leading-[1.1] text-accent">
              {brand.stat}
              <small className="mt-0.5 block text-[.78rem] font-normal text-muted">
                {brand.statLabel}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
