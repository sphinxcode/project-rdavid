import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-accent-600 bg-clip-text text-transparent">
                Tambayan PH
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              AI automation made simple for everyone.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Browse Tools
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Tambayan PH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
