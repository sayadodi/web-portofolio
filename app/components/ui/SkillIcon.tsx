import { Camera, Sparkles, Video } from "lucide-react";

export function SkillIcon({
  name,
  className = "size-3.5 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M11.91 2C6.9 2 7.21 4.18 7.21 4.18L7.22 6.44H12V7.19H5.16S2 6.83 2 11.84c0 5 2.76 4.82 2.76 4.82h1.64v-2.31s-.09-2.76 2.71-2.76h4.66s2.61.04 2.61-2.55V4.74S16.92 2 11.91 2zM9.34 3.52a.78.78 0 110 1.56.78.78 0 010-1.56z"
          fill="currentColor"
        />
        <path
          d="M12.09 22c5.01 0 4.7-2.18 4.7-2.18l-.01-2.26H12v-.75h6.84s3.16.36 3.16-4.65c0-5.01-2.76-4.82-2.76-4.82h-1.64v2.31s.09 2.76-2.71 2.76H10.23s-2.61-.04-2.61 2.55v4.3s-.54 2.74 4.47 2.74zm2.57-1.52a.78.78 0 110-1.56.78.78 0 010 1.56z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.31 2L5 11.31l2.83 2.83L19.97 2h-5.66z" fill="currentColor" />
        <path
          d="M14.31 11.66L8.8 17.17l2.83 2.83 2.68-2.68 5.66 5.68h5.66l-8.5-8.5-2.82-2.84z"
          fill="currentColor"
        />
        <path d="M11.63 14.34l2.68-2.68 2.83 2.83-2.68 2.68z" fill="currentColor" />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.639 5.215L12.36.035a.87.87 0 0 0-.72 0L.361 5.215a.87.87 0 0 0-.361.76v12.05a.87.87 0 0 0 .361.76l11.279 5.18a.87.87 0 0 0 .72 0l11.279-5.18a.87.87 0 0 0 .361-.76V5.975a.87.87 0 0 0-.361-.76zm-12.039 16.59-10.039-4.61V6.92l10.039 4.61v10.275zm.76-11.025L2.571 6.27 12 1.94l9.429 4.33-9.789 4.51zm9.279 6.415-10.039 4.61V11.53l10.039-4.61v10.27z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // AI Knowledge & Agents
  if (normalized.includes("ai") || normalized.includes("agent")) {
    return <Sparkles className={className} aria-hidden="true" />;
  }

  // Microsoft Office
  if (normalized.includes("office") || normalized.includes("microsoft")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="currentColor" />
        <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="currentColor" />
        <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="currentColor" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="currentColor" />
      </svg>
    );
  }

  // Adobe Premiere Pro
  if (normalized.includes("premiere")) {
    return (
      <span
        className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border border-line bg-elevated font-sans text-[7.5px] font-black leading-none text-paper"
        aria-hidden="true"
      >
        Pr
      </span>
    );
  }

  // Adobe After Effects
  if (normalized.includes("after effects")) {
    return (
      <span
        className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border border-line bg-elevated font-sans text-[7.5px] font-black leading-none text-paper"
        aria-hidden="true"
      >
        Ae
      </span>
    );
  }

  // Adobe Lightroom
  if (normalized.includes("lightroom")) {
    return (
      <span
        className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border border-line bg-elevated font-sans text-[7.5px] font-black leading-none text-paper"
        aria-hidden="true"
      >
        Lr
      </span>
    );
  }

  // Adobe Photoshop
  if (normalized.includes("photoshop")) {
    return (
      <span
        className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border border-line bg-elevated font-sans text-[7.5px] font-black leading-none text-paper"
        aria-hidden="true"
      >
        Ps
      </span>
    );
  }

  // Videography
  if (normalized.includes("videograph") || normalized.includes("video")) {
    return <Video className={className} aria-hidden="true" />;
  }

  // Photography
  if (normalized.includes("photograph") || normalized.includes("foto")) {
    return <Camera className={className} aria-hidden="true" />;
  }

  // Fallback icon
  return <span className="size-2 rounded-full bg-paper/60" aria-hidden="true" />;
}
