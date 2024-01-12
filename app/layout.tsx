import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "biosrc",
  description: ":)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
