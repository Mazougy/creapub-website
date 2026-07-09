import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="container-padded flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="font-display text-xl font-semibold text-white" aria-label="Retour à l'accueil">
            {company.name}
          </a>
          <p className="mt-2 text-sm text-white/48">{company.slogan}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-white/56" aria-label="Footer navigation">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#products" className="transition hover:text-white">Produits</a>
          <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <p className="text-sm text-white/42">
          © {new Date().getFullYear()} Creapub. Communication visuelle premium.
        </p>
      </div>
    </footer>
  );
}
