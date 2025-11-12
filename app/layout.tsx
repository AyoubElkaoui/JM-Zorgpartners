import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Zorgpartners - Altijd de juiste match!",
  description: "JM Zorgpartners verbindt gepassioneerde zorgprofessionals met de beste werkgevers in de zorgsector.",
  keywords: "zorg, uitzendbureau, verpleging, verzorging, vacatures, zorgpersoneel, healthcare",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
