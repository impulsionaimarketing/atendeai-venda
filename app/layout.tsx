import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atende Aí — Todos os seus atendimentos num painel só, com IA",
  description:
    "Centralize WhatsApps, Instagram, Mercado Livre e mais num painel só, com IA atendendo 24 horas e integração por API.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
