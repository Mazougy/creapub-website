import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

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
  ...props
}: LinkButtonProps) {
  const Icon = iconMap[icon];
  const styles = {
    primary:
      "bg-gold text-black shadow-gold hover:bg-gold-soft focus-visible:outline-gold",
    secondary:
      "border border-white/12 bg-white/7 text-white hover:border-gold/70 hover:text-gold focus-visible:outline-white",
    ghost:
      "bg-transparent text-white/78 hover:text-white focus-visible:outline-white",
  };

  return (
    <a
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
