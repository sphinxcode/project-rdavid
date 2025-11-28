import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className = '', hover = false, children, ...props }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow' : ''

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-gray-500 mt-1 ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 pb-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}
