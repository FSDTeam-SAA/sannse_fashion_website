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
const currentPage = navItems.find((item) => item.href === pathname)

const headerData = {
  title: currentPage?.name || "My Account",
  navItems: [
    { label: "Home", href: "/" },
    { label: "My Profile", href: "/account/personal-information" },
    ...(currentPage
      ? [{ label: currentPage.name, href: currentPage.href }]
      : []),
  ],
}

  return (
  <>
    <PageHeader title={headerData.title} navItems={headerData.navItems} />

    {/* account content  */}
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden ">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-col items-center">
          <div className="flex flex-col items-center mb-6">
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
            <h2 className="text-base md:text-lg font-semibold mt-4 text-center text-gray-900">
              Bessie Edwards
            </h2>
            <p className="text-sm text-center text-gray-500 break-words">
              darrellsteward@gmail.com
            </p>
          </div>

          {/* Nav */}
          <nav className="w-full space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900",
                  pathname === item.href && "bg-red-100 font-medium"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            <Link
              href="/logout"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-500 transition-all hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>


    
  </>
  )
}
