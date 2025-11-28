'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Github } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { createClient } from '@/lib/supabase/client'

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
          },
          emailRedirectTo: `${window.location.origin}/verify-email`,
        },
      })

      if (error) throw error

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'An error occurred during signup')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'An error occurred during Google signup')
      setIsLoading(false)
    }
  }

  const handleGithubSignup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'An error occurred during GitHub signup')
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Check your email</CardTitle>
              <CardDescription>
                We've sent you a verification link to confirm your email address.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Please check your inbox and click the verification link to complete your registration.
                You may need to check your spam folder.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Get started free</h1>
          <p className="mt-2 text-gray-600">
            Create your account and get 500 free credits
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your Tambayan PH account
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <div className="mb-4 p-3 bg-error/10 border border-error text-error rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register('name')}
                disabled={isLoading}
              />

              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register('email')}
                disabled={isLoading}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Create a strong password"
                error={errors.password?.message}
                helperText="At least 8 characters with uppercase, lowercase, and number"
                {...register('password')}
                disabled={isLoading}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Re-enter your password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword')}
                disabled={isLoading}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={handleGoogleSignup}
                  disabled={isLoading}
                  className="w-full"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>

                <Button
                  variant="outline"
                  onClick={handleGithubSignup}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-primary-500 hover:text-primary-600">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-500 hover:text-primary-600">
                Privacy Policy
              </Link>
            </p>
          </CardContent>

          <CardFooter>
            <p className="text-sm text-gray-600 text-center w-full">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
