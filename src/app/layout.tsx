import type { Metadata } from "next";
import { Geist, Geist_Mono, Overlock } from "next/font/google";
import "../styles/globals.css";
import Header from "@/features/header/components/header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const overlock  = Overlock({
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
        <Header />
        {children}
      </body>
    </html>
  )
}
