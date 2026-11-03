import { BrandsSection } from "@/components/BrandsSection";
import { ContactSection } from "@/components/ContactSection";
import { Dock } from "@/components/Dock";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ViewsSection } from "@/components/ViewsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[1080px] px-5">
        <Hero />
        <ViewsSection />
        <BrandsSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
        <footer className="pb-[130px] pt-5 text-center text-[.82rem] text-muted">
          © 2026 Harsh Verma
        </footer>
      </main>

      <Dock />
    </>
  );
}
