import { CreditCard, Star, Clock, MessageSquare } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-1 text-gray-600">
            Here's what's happening with your automation tools
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Credit Balance Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Credit Balance</CardTitle>
                <CreditCard className="w-5 h-5 text-primary-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-3xl font-bold text-gray-900">8,500</p>
                  <p className="text-sm text-gray-500">of 11,000 credits</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-accent-600 h-2 rounded-full"
                    style={{ width: '77%' }}
                  ></div>
                </div>
                <Link href="/billing">
                  <Button variant="outline" size="sm" className="mt-4">
                    Add Credits
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Usage This Month Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>This Month</CardTitle>
                <Clock className="w-5 h-5 text-primary-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Credits Used</p>
                  <p className="text-2xl font-semibold text-gray-900">2,500</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tools Run</p>
                  <p className="text-2xl font-semibold text-gray-900">12</p>
                </div>
                <Link href="/history">
                  <Button variant="ghost" size="sm" className="mt-2">
                    View History
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Favorites Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary-500" />
              Your Favorites
            </h2>
            <Link href="/tools">
              <Button variant="ghost" size="sm">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card hover className="cursor-pointer">
              <CardContent className="p-6">
                <p className="text-gray-500 text-sm">No favorites yet</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recently Used Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-500" />
              Recently Used
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card hover className="cursor-pointer">
              <CardContent className="p-6">
                <p className="text-gray-500 text-sm">No recent tools</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Chats Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary-500" />
              Continue Chatting
            </h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-500 text-sm text-center">
                No active conversations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
