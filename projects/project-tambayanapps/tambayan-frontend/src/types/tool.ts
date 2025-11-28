export interface Tool {
  id: string
  name: string
  description: string
  longDescription?: string
  icon?: string
  creditCost: number
  webhookUrl: string
  isActive: boolean
  toolType: ToolType
  formConfig?: FormField[]
  responseType?: ResponseType
  emailConfig?: EmailConfig
  createdAt: Date
  updatedAt: Date
  usageCount?: number
  averageRating?: number
  reviewCount?: number
  categories?: ToolCategory[]
}

export enum ToolType {
  FORM = 'FORM',
  AI_CHAT = 'AI_CHAT',
  SCHEDULE = 'SCHEDULE',
}

export enum ResponseType {
  INLINE = 'INLINE',
  EMAIL = 'EMAIL',
  BOTH = 'BOTH',
}

export interface FormField {
  id: string
  name: string
  label: string
  type: 'text' | 'textarea' | 'number' | 'email' | 'url' | 'select' | 'checkbox' | 'file'
  required: boolean
  placeholder?: string
  options?: string[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

export interface EmailConfig {
  enabled: boolean
  subject?: string
  template?: string
}

export interface ToolCategory {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  sortOrder: number
  isActive: boolean
}

export interface ToolFeedback {
  id: string
  userId: string
  toolId: string
  rating: number
  comment?: string
  createdAt: Date
  updatedAt: Date
}

export interface Favorite {
  id: string
  userId: string
  toolId: string
  createdAt: Date
}

export interface ToolUsage {
  id: string
  userId: string
  toolId: string
  creditsUsed: number
  status: 'SUCCESS' | 'FAILED' | 'PENDING'
  input?: any
  output?: any
  errorMessage?: string
  executedAt: Date
}
