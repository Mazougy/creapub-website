import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered
          ? "mx-auto mb-12 max-w-3xl text-center md:mb-16"
          : "mb-10 max-w-3xl md:mb-14"
      }
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-navy/60 md:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
