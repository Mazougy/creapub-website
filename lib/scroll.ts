import type { MouseEvent } from "react";

const HEADER_OFFSET = 88;

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  hash: string,
  onNavigate?: () => void,
) {
  if (!hash.startsWith("#")) return;

  event.preventDefault();
  onNavigate?.();

  window.requestAnimationFrame(() => {
    window.setTimeout(() => scrollToSection(hash), onNavigate ? 120 : 0);
  });
}
