"use client";

import { Fragment, useCallback, useMemo, useState } from "react";
import {
  categories,
  featuredIds,
  projects,
  type Project,
} from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { VideoModal } from "./VideoModal";

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter(
      (project) =>
        activeCategory === "All" || project.category === activeCategory,
    );

    if (activeCategory !== "All") return filtered;

    return [
      ...filtered.filter((project) => featuredIds.has(project.driveId)),
      ...filtered.filter((project) => !featuredIds.has(project.driveId)),
    ];
  }, [activeCategory]);

  return (
    <section id="work" className="py-14">
      <SectionHeading small="Selected">Work</SectionHeading>

      <div
        role="group"
        aria-label="Filter projects"
        className="mb-0 mt-[26px] flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full border px-[18px] py-2 text-[.88rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                active
                  ? "border-accent bg-accent font-semibold text-[#0b0b0b]"
                  : "border-line bg-surface font-normal text-text"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
        {visibleProjects.length === 0 ? (
          <p className="col-span-full text-muted">
            Corporate edits are being added here. Check back soon.
          </p>
        ) : null}

        {visibleProjects.map((project, index) => (
          <Fragment key={project.driveId}>
            {activeCategory === "All" && index === 0 ? (
              <h3 className="col-span-full mt-3.5 text-[1.2rem] text-accent">
                Top picks
              </h3>
            ) : null}

            {activeCategory === "All" && index === featuredIds.size ? (
              <h3 className="col-span-full mt-3.5 text-[1.2rem] text-accent">
                More work
              </h3>
            ) : null}

            <ProjectCard project={project} onOpen={setSelected} />
          </Fragment>
        ))}
      </div>

      <VideoModal project={selected} onClose={closeModal} />
    </section>
  );
}
