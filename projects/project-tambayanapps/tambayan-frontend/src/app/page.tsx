import Link from 'next/link'
import { Sparkles, Zap, Clock, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Automation Made{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-600 bg-clip-text text-transparent">
                Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access powerful AI tools designed for small businesses, freelancers, and entrepreneurs.
              No coding required, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button variant="primary" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg">
                  Browse Tools
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              500 free credits • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tambayan PH?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to automate your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Ready-to-Use Tools</CardTitle>
                <CardDescription>
                  Browse our gallery of pre-built automation tools. Just fill a form and get instant results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>AI-Powered Chat</CardTitle>
                <CardDescription>
                  Have conversations with AI tools. Get personalized outputs through natural dialogue.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Save Time</CardTitle>
                <CardDescription>
                  Automate repetitive tasks that take hours. Get your work done in seconds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Your data is protected with enterprise-grade security. 99.9% uptime guaranteed.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Choose a Tool
              </h3>
              <p className="text-gray-600">
                Browse our gallery and pick a tool that fits your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Provide Input
              </h3>
              <p className="text-gray-600">
                Fill out a simple form or chat with the AI assistant
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Results
              </h3>
              <p className="text-gray-600">
                Receive your output instantly or via email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who are saving time with AI automation
            </p>
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
