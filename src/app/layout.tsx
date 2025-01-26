"use client";

import Head from "next/head";

import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import ClientProviders from "@/services/providers/client-providers";
import Layouts from "@/components/layouts";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Cinestream</title>
        <meta name="Cinestream" content="Welcome to Cinestream" />
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        <ClientProviders>
          <Layouts>{children}</Layouts>
        </ClientProviders>
      </body>
    </html>
  );
}
