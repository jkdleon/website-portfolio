import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { ThreeBackground } from "@/components/ui/ThreeBackground";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "James Kyle De Leon | IT Executive & Network Engineer",
  description:
    "Portfolio of James Kyle De Leon — IT professional with 7+ years in enterprise networking, transitioning into Cloud & DevOps. Open to remote roles.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.classList.toggle('light',!d);})()`,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${manrope.variable} antialiased bg-background text-foreground`}
      >
        <ThreeBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
