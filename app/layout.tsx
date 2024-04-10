import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Nav from "./components/Navbar";
import { poppins } from "./components/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "e-commerce app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-text antialiased`}>
        <Provider>
          <Nav session={session} />
          <main className="p-5">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
