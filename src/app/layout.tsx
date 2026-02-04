import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dust Partner Ecosystem — Vision Tour",
  description:
    "An interactive tour of the Dust partner ecosystem strategy: Experts, Marketplace, Community, and the flywheel that powers it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
