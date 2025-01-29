import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import ProvidersWrapper from "@/services/providers/providers-wrapper";
import Layouts from "@/components/layouts";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CineStream",
  description: "Welcome to CineStream, your ultimate movie streaming platform.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ProvidersWrapper>
          <Layouts>{children}</Layouts>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
