"use client";

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { handleAnchorClick } from "@/lib/scroll";

type ButtonVariant = "primary" | "secondary" | "ghost";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: "arrow" | "whatsapp" | "phone";
};

const iconMap = {
  arrow: ArrowRight,
  whatsapp: MessageCircle,
  phone: Phone,
};

export function LinkButton({
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
  href = "",
  onClick,
  ...props
}: LinkButtonProps) {
  const Icon = iconMap[icon];
  const styles = {
    primary:
      "bg-brand text-white shadow-[0_12px_28px_rgba(73,90,168,0.24)] hover:bg-brand-hover focus-visible:outline-brand",
    secondary:
      "border border-brand-muted bg-white text-navy hover:border-brand hover:text-brand focus-visible:outline-brand",
    ghost:
      "bg-transparent text-navy-soft hover:text-navy focus-visible:outline-brand",
  };

  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && href.startsWith("#")) {
      handleAnchorClick(event, href);
    }
  };

  return (
    <a
      href={href}
      onClick={onLinkClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <Icon
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}
