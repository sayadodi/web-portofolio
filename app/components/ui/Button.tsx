import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

import { cx } from "@/lib/cx";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-[var(--ease-out-expo)] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-paper text-ink hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-12px_rgba(255,255,255,0.45)]",
  outline:
    "border border-line text-paper hover:border-paper/50 hover:bg-paper/5",
  ghost: "text-muted hover:text-paper",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  to?: string;
  href?: string;
}

export function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = cx(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
