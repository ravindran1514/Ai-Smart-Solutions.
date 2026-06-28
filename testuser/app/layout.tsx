import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UMGU - Smart Solutions",
  description: "AI-powered marketing tools, websites, mobile apps, and digital growth solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
