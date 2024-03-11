import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

const myFont = localFont({
  src: "../../public/fonts/keetano_katana.ttf",
  display: "swap",
  variable: "--font-keetano",
});
const obrazec = localFont({
  src: "../../public/fonts/Obrazec-2.ttf",
  display: "swap",
  variable: "--font-obrazec",
});
const relieve = localFont({
  src: "../../public/fonts/Relieve.ttf",
  display: "swap",
  variable: "--font-relieve",
});

export const metadata: Metadata = {
  title: "Mafia site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} ${obrazec.variable} ${relieve.variable}`}>
        {children}
      </body>
    </html>
  );
}
