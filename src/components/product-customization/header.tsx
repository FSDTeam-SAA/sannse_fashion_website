import { ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold">
            SAN<span className="text-red-500">ZZ</span>SE
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
            <a href="#" className="hover:text-gray-300">
              FAQ
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  )
}
