import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creapub.vercel.app"),
  title: {
    default: "Creapub | Premium Visual Communication",
    template: "%s | Creapub",
  },
  description:
    "Découvrez les réalisations Creapub : enseignes lumineuses, impression, signalétique et fabrication sur mesure.",
  keywords: [
    "Creapub",
    "visual communication",
    "LED signs",
    "3D letters",
    "large format printing",
    "vehicle branding",
    "storefront design",
    "Africa Gulf signage",
  ],
  authors: [{ name: "Creapub" }],
  creator: "Creapub",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://creapub.vercel.app",
    siteName: "Creapub",
    title: "Creapub | Enseignes et communication visuelle",
    description:
      "Enseignes lumineuses, impression, signalétique et projets de communication visuelle réalisés par Creapub.",
    images: [
      {
        url: "https://creapub.vercel.app/images/og-creapub.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Creapub — enseignes et communication visuelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creapub | Enseignes et communication visuelle",
    description:
      "Enseignes lumineuses, impression, signalétique et projets de communication visuelle réalisés par Creapub.",
    images: ["https://creapub.vercel.app/images/og-creapub.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#495AA8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              borderRadius: "16px",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
