import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paladar",
  description: "Site oficial do restaurante Paladar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
