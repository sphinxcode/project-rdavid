'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NavBar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-600 bg-clip-text text-transparent">
              Tambayan PH
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/tools"
              className={`text-sm font-medium transition-colors ${
                isActive('/tools') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Tools
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
