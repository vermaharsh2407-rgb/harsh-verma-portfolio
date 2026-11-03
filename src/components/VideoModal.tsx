"use client";

import { useEffect, useRef } from "react";
import { driveFileUrl, drivePreviewUrl, type Project } from "@/data/projects";
import { OffsetLink } from "./OffsetLink";

type VideoModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3.5 bg-black/[.88] p-4"
    >
      <div className="text-center font-semibold text-white">{project.title}</div>

      <div className="aspect-video w-[min(94vw,960px,calc(70vh*16/9))] overflow-hidden rounded-[14px] bg-black">
        <iframe
          src={drivePreviewUrl(project.driveId)}
          title={project.title}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>

      <div className="flex items-center gap-[22px]">
        <OffsetLink
          href={driveFileUrl(project.driveId)}
          target="_blank"
          rel="noopener"
          variant="dark"
          className="inline-block px-5 py-[9px] text-[.9rem]"
        >
          Open in Drive
        </OffsetLink>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-full border border-line bg-surface px-[18px] py-2 text-[.88rem] text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Close
        </button>
      </div>
    </div>
  );
}
