export interface ChatSession {
  id: string
  userId: string
  toolId: string
  title: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  messages?: ChatMessage[]
}

export interface ChatMessage {
  id: string
  sessionId: string
  role: MessageRole
  content: string
  metadata?: Record<string, any>
  createdAt: Date
}

export enum MessageRole {
  USER = 'USER',
  ASSISTANT = 'ASSISTANT',
  SYSTEM = 'SYSTEM',
}

export interface SharedOutput {
  id: string
  userId: string
  toolUsageId: string
  shareToken: string
  title?: string
  isPublic: boolean
  expiresAt?: Date
  viewCount: number
  createdAt: Date
}
