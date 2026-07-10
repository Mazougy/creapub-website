import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope } from "next/font/google";
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
  metadataBase: new URL("https://www.creapub.com"),
  title: {
    default: "Creapub | Premium Visual Communication",
    template: "%s | Creapub",
  },
  description:
    "Creapub creates premium visual communication, LED signs, 3D letters, large format printing, CNC, laser cutting, vehicle branding, and commercial signage.",
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
    locale: "en_US",
    url: "https://www.creapub.com",
    siteName: "Creapub",
    title: "Creapub | Premium Visual Communication",
    description:
      "Where ideas become visible through premium signage, printing, fabrication, and branded environments.",
    images: [
      {
        url: "/images/og-creapub.svg",
        width: 1200,
        height: 630,
        alt: "Creapub premium visual communication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creapub | Premium Visual Communication",
    description:
      "Premium visual communication for restaurants, hotels, factories, retail, real estate, clinics, and events.",
    images: ["/images/og-creapub.svg"],
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
        <Analytics />
      </body>
    </html>
  );
}
