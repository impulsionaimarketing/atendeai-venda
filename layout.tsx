import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atende Aí — Agentes de IA no WhatsApp",
  description:
    "Agentes de IA que atendem seus clientes no WhatsApp 24 horas, com todos os canais de atendimento num painel só.",
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
