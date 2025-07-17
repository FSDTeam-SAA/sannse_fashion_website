import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}
