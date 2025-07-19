"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Lock, LogOut, Package, User } from "lucide-react"
import { cn } from "@/lib/utils"
import PageHeader from "@/components/pageHeader/PageHeader"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Personal Information",
      href: "/account/personal-information",
      icon: User,
    },
    {
      name: "Change Password",
      href: "/account/change-password",
      icon: Lock,
    },
    {
      name: "Order History",
      href: "/account/order-history",
      icon: Package,
    },
  ]


//   page header title and nav items
           const headerData = {
    title: "All Products",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "My Profile", href: "/My Profile" },
       { label: " Personal Information", href: "/ Personal Information" },
    ],
  };

  return (
  <>
    <PageHeader title={headerData.title} navItems={headerData.navItems} />
    <div className="h-screen flex items-center justify-center bg-white ">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg  overflow-hidden ">
        <aside className="w-full md:w-64 border-b md:border-b-0  border-gray-200 p-6 flex flex-col">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src="/images/profile-pic.png"
                alt="Bessie Edwards"
                width={96}
                height={96}
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-camera text-gray-700"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-4 text-gray-900">Bessie Edwards</h2>
            <p className="text-sm text-gray-500">darrellsteward@gmail.com</p>
          </div>
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-4 text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900",
                  pathname === item.href && "bg-red-100 ",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
              
            ))}
               <Link
              href="/logout"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-all hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </Link>
          </nav>
          {/* <div className="mt-auto pt-4 md:pt-0">
            <Link
              href="/logout"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-all hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </Link>
          </div> */}
        </aside>
        <main className="flex-1 h-[90vh] p-6 overflow-auto">{children}</main>
      </div>
    </div>
  </>
  )
}
