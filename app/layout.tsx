import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "AJECCH | Association des Jeunes Chrétiens du Cap-Haïtien",
  description:
    "L’AJECCH rassemble une jeunesse chrétienne autour de la foi, de la fraternité et de l’engagement communautaire au Cap-Haïtien.",
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
    shortcut: [{ url: "/favicon.webp", type: "image/webp" }]
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
