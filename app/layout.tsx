import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Nav from "./components/Navbar";
import { poppins } from "./components/fonts";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-body antialiased`}>
        <Provider>
          <Nav />
          <main className="p-5">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
