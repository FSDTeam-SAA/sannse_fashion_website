// components/pageHeader/PageHeader.tsx
"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import pageHeaderImage from "@/public/images/pageHeaderImage.jpg";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type NavbarBannerProps = {
  title: string;
  navItems: NavItem[];
};

const PageHeader: React.FC<NavbarBannerProps> = ({ title, navItems }) => {
  const pathname = usePathname();

  return (
    <div className="relative w-full lg:h-[350px] h-[250px] bg-black">
      <Image
        src={pageHeaderImage}
        alt="Clothes on hangers"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="text-center px-4">
          <h1 className="lg:text-[40px] md:text-[30px] text-[24px] font-semibold leading-[120%] text-white mb-2">{title}</h1>
          <nav className="mt-2 text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white mx-1 ${
                  pathname === item.href ? "" : "hover:"
                }`}
              >
                {item.label}
                {index < navItems.length - 1 && <span className=""> <span className="ml-2"> {">"} </span></span>}
              </Link>
            ))}
          </nav>
        </div> 
      </div>
    </div>
  );
};

export default PageHeader;
