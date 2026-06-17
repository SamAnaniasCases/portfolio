import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CreativeDev | Interactive Portfolio",
  description: "A premium, interactive personal branding platform showcasing development skills, projects, and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://api.fontshare.com/v2/css?f[]=array@400,700&f[]=hoover@400,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main style={{ flex: "1 0 auto", paddingTop: "70px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
