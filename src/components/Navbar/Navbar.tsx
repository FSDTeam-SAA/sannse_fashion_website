"use client"
import Link from 'next/link'
import { ChevronDown, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 text-white border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-gray-700 shadow-lg' 
        : 'bg-[#000000] border-gray-800'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-[70px]' : 'h-[88px]'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`font-bold transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              SAN<span className="text-red-500">N</span>SE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium underline decoration-red-500 decoration-2 underline-offset-4 transition-colors"
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-gray-300 hover:bg-transparent px-3 py-2 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>Products</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-black/95 backdrop-blur-md border-gray-700 text-white">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                      <Link href="/products/category1" className="w-full">
                        Category 1
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                      <Link href="/products/category2" className="w-full">
                        Category 2
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                      <Link href="/products/category3" className="w-full">
                        Category 3
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link 
                href="/faq" 
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
              
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="text-white hover:text-gray-300 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {/* Optional: Add cart count badge */}
              {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span> */}
            </Link>
            <Link 
              href="/account" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-md text-white border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="text-2xl font-bold">
                    SAN<span className="text-red-500">N</span>SE
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <Link 
                    href="/about" 
                    className="text-white hover:text-gray-300 py-2 text-lg font-medium underline decoration-red-500 decoration-2 underline-offset-4 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  
                  <div className="py-2">
                    <div className="text-white text-lg font-medium mb-2">Products</div>
                    <div className="pl-4 space-y-2">
                      <Link 
                        href="/products/category1" 
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Category 1
                      </Link>
                      <Link 
                        href="/products/category2" 
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Category 2
                      </Link>
                      <Link 
                        href="/products/category3" 
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Category 3
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/faq" 
                    className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="flex items-center space-x-6 pt-6 border-t border-gray-800">
                    <Link 
                      href="/cart" 
                      className="text-white hover:text-gray-300 transition-colors relative"
                      onClick={() => setIsOpen(false)}
                    >
                      <ShoppingCart className="h-6 w-6" />
                      {/* Optional: Add cart count badge */}
                      {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span> */}
                    </Link>
                    <Link 
                      href="/profile" 
                      className="text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}