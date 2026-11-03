"use client";

import { useEffect, useRef, useState } from "react";
import { driveFileUrl, driveStreamUrl, hues, type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const hue = hues[project.category] ?? [24, 8];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      !("IntersectionObserver" in window) ||
      reducedMotion ||
      connection?.saveData
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = driveStreamUrl(project.driveId);
            }
            const playback = video.play();
            if (playback?.catch) playback.catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [project.driveId]);

  return (
    <a
      href={driveFileUrl(project.driveId)}
      target="_blank"
      rel="noopener"
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.button !== 0
        ) {
          return;
        }
        event.preventDefault();
        onOpen(project);
      }}
      className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className="relative flex aspect-[16/10] items-center justify-center"
        style={{
          background: `linear-gradient(135deg,hsl(${hue[0]},80%,48%),hsl(${hue[1]},70%,22%))`,
        }}
      >
        <span className="absolute left-2.5 top-2.5 z-20 rounded-full bg-black/60 px-[11px] py-[3px] text-[.72rem] text-white">
          {project.category}
        </span>

        <span
          aria-hidden
          className={`relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/[.93] transition-opacity duration-300 ${
            playing ? "opacity-0" : ""
          }`}
        >
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#0b0b0b]" />
        </span>

        {!failed ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            onLoadedData={() => setReady(true)}
            onPlaying={() => setPlaying(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}
      </div>

      <div className="px-[18px] pb-[18px] pt-3.5">
        <h3 className="mb-0.5 text-base text-accent">{project.title}</h3>
        <p className="m-0 text-[.85rem] text-muted">{project.client}</p>
      </div>
    </a>
  );
}
