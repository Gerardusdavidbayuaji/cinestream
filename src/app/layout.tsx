import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Layouts from "@/components/layouts";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cinestream",
  description: "Welcome to Cinestream",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
