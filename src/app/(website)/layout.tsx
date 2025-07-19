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
      <div className="mt-[70px]">{children}</div>
      <Footer />
    </main>
  );
}
