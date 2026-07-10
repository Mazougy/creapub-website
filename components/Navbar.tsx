"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { handleAnchorClick } from "@/lib/scroll";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Produits", href: "#products" },
  { label: "Processus", href: "#process" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href, closeMenu);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
          scrolled || open
            ? "border-b border-brand/10 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <nav className="container-padded flex h-16 items-center justify-between sm:h-20" aria-label="Navigation principale">
          <a
            href="#top"
            className="relative block h-9 w-[160px] shrink-0 sm:h-11 sm:w-[216px]"
            aria-label="Accueil Creapub"
            onClick={(event) => onAnchorClick(event, "#top")}
          >
            <Image
              src="/images/logo.svg"
              alt="Creapub"
              fill
              priority
              sizes="(min-width: 640px) 216px, 160px"
              className="object-contain object-left"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy/65 transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                onClick={(event) => onAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact-form"
            className="hidden min-h-11 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:inline-flex"
            onClick={(event) => onAnchorClick(event, "#contact-form")}
          >
            Demander un devis
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/15 text-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-navy/20 backdrop-blur-[2px] sm:top-20 lg:hidden"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          />
          <div
            id="mobile-menu"
            className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-brand/10 bg-white shadow-sm sm:top-20 sm:max-h-[calc(100dvh-5rem)] lg:hidden"
          >
            <div className="container-padded flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-navy/80 transition active:bg-surface-blue hover:bg-surface-blue hover:text-navy"
                  onClick={(event) => onAnchorClick(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact-form"
                className="mt-3 rounded-full bg-brand px-5 py-3.5 text-center text-sm font-semibold text-white shadow-sm"
                onClick={(event) => onAnchorClick(event, "#contact-form")}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
