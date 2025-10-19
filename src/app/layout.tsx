import type { Metadata } from "next";
import { Overlock } from "next/font/google";
import "../styles/globals.css";

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Dev Journey",
  description: "Documenting My Dev Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overlock.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
