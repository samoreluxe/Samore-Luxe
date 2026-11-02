
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samore Luxe | Jewellery Design by Samia",
  description:
    "Discover timeless artificial jewellery, elegant statement pieces and thoughtful gifting at Samore Luxe.",
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
