import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AJECCH | Association des Jeunes Chrétiens du Cap-Haïtien",
  description:
    "Découvrez l'AJECCH, une communauté de jeunes chrétiens engagés dans la foi, le service et le développement de leur communauté au Cap-Haïtien.",
  metadataBase: new URL("https://ajecch.org")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}