import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-[#f4f7ff] py-10">
      <div className="container-padded flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="font-display text-xl font-semibold text-navy" aria-label="Retour à l'accueil">
            {company.name}
          </a>
          <p className="mt-2 text-sm text-navy/45">{company.slogan}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-navy/55" aria-label="Footer navigation">
          <a href="#services" className="transition hover:text-brand">Services</a>
          <a href="#products" className="transition hover:text-brand">Produits</a>
          <a href="#portfolio" className="transition hover:text-brand">Portfolio</a>
          <a href="#contact" className="transition hover:text-brand">Contact</a>
        </nav>
        <p className="text-sm text-navy/40">
          © {new Date().getFullYear()} Creapub. Communication visuelle premium.
        </p>
      </div>
    </footer>
  );
}
