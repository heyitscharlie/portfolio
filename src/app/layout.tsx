import type { Metadata } from "next";
import { ThemeProvider } from "@heyitscharlie/design-system";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlie Martins",
  description:
    "Senior product engineer building SPAs, mobile apps, and design-system-driven frontends in React, React Native, and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider defaultPalette="space">{children}</ThemeProvider>
      </body>
    </html>
  );
}
