import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-xl font-bold mb-4">
              SAN<span className="text-red-500">ZZ</span>SE
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur. Nisl ut integer eu sit ipsum arcu tortor vehicula. Fames dolor
              nibh cursus pulvinar diam risus.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 208 Olson Boulevard, Toyburgh</li>
              <li>📞 (303) 555-0105</li>
              <li>✉️ housing@realestate.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe for the latest deals</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-gray-600"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2025 Drip Swag All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
