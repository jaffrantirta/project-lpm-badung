import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LPM Kabupaten Badung - Beranda",
  description: "Lembaga Pemberdayaan Masyarakat Kabupaten Badung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
