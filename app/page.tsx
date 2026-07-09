import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Founders } from "@/components/Founders";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creapub",
  foundingDate: "2025",
  slogan: "Là où vos idées deviennent visibles.",
  url: "https://www.creapub.com",
  email: "hello@creapub.com",
  telephone: "+21655000000",
  description:
    "Premium visual communication company providing signage, printing, LED signs, 3D letters, CNC, laser cutting, vehicle branding, and interior branding.",
  areaServed: ["Africa", "Gulf"],
  knowsAbout: [
    "Large Format Printing",
    "LED Signs",
    "3D Letters",
    "Laser Cutting",
    "CNC",
    "Vehicle Branding",
    "Interior Branding",
    "Storefront Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Process />
        <About />
        <Founders />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
