import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieConsent from "./legal/CookieConsent";
import Header from "./layout/header/Header";
import Footer2 from "./layout/footer/Footer2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OUTFRONT",
  description: "Created by ggg6r34t",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="bg-gray-100 min-h-screen font-sans">{children}</main>
        <Footer2 />
      </body>
      <CookieConsent />
    </html>
  );
}
