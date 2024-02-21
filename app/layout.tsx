import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/redux/provider";
import CookieConsent from "./legal/CookieConsent";
import Footer2 from "./layout/footer/Footer2";
import Navbar from "./layout/Navbar";

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
    <html lang="en" className="scroll-smooth dark">
      <Provider>
        <body className={inter.className}>
          <Navbar />
          <main className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans">
            {children}
          </main>
          <Footer2 />
          <CookieConsent />
        </body>
      </Provider>
    </html>
  );
}
