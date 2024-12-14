import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summer Days | Where Winter Goes to Hibernate 🌞",
  description: "Counting down to tank tops and flip-flops! Your daily dose of summer hope while wrapped in 3 sweaters and a blanket. Join us in our warm weather daydreams! ⛱️",
  keywords: "summer, beach, winter survival, sunshine therapy, vitamin sea",
  openGraph: {
    title: "Summer Days ☀️",
    description: "Because who doesn't miss wearing just ONE layer of clothing?",
    images: ['/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
