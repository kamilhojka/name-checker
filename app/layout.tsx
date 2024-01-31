import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "name-checker | Check availability of your name among social platforms",
  description:
    "Discover the availability of your name across various social platforms. Use name-checker to quickly find out if your desired username is taken or if you can claim it on popular social networks. Enhance your online presence with a unique and accessible identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
