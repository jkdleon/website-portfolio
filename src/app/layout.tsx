import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "James Kyle De Leon | Cloud & Network Infrastructure Engineer",
  description:
    "Portfolio of James Kyle De Leon — Cloud & Network Infrastructure Engineer with 8 years in enterprise and service-provider infrastructure. Azure (AZ-104), AWS, GCP, Terraform, Cisco/Fortinet. Doha, Qatar; open to remote and relocation.",
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
        className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThreeBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
