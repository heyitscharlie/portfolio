import type { Metadata } from "next";
import { ThemeProvider } from "@heyitscharliem/design-system";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlie Martins",
  description: "Portfolio of Charlie Martins.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
