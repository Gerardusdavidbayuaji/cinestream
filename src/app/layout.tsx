import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import ReactQueryProvider from "@/services/providers/react-query-provider";
import ThemeProvider from "@/services/providers/them-providers";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Layouts>{children}</Layouts>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
