import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./layout/Navbar";
import CookieConsent from "./legal/CookieConsent";
import Footer2 from "./layout/footer/Footer2";
import Provider from "@/redux/provider";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

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
        <QueryClientProvider>
          <AuthProvider>
            <body className={inter.className}>
              <Navbar />
              <main className="bg-gray-100 min-h-screen font-sans">
                {children}
              </main>
              <Footer2 />
              <CookieConsent />
            </body>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </html>
  );
}
