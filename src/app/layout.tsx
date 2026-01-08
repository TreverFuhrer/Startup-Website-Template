import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Title",
  description: "Short description of your startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("antialiased")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
