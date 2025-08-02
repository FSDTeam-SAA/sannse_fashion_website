import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Sannse Fashion | Website",
  description: "Your fashion destination for the latest trends and styles", // More descriptive
  keywords: "fashion, clothing, style, trends", // Add keywords for SEO
  authors: [{ name: "Sannse Fashion" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>{children}</AppProvider>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
