import type { ReactNode } from "react";

import { cx } from "@/lib/cx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
