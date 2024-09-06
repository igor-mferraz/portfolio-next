
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/next-ui";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Portifolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-BR">
      <body className='bg-background text-foreground'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
