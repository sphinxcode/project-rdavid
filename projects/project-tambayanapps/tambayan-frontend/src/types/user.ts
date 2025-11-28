export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  supabaseId: string
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserCredit {
  id: string
  userId: string
  balance: number
  subscriptionCredits: number
  addonCredits: number
  updatedAt: Date
}

export interface Subscription {
  id: string
  userId: string
  stripeCustomerId: string | null
  stripeSubId: string | null
  plan: PlanType
  status: SubStatus
  billingCycle: BillingCycle
  currentPeriodStart: Date | null
  currentPeriodEnd: Date | null
  cancelAtPeriodEnd: boolean
  createdAt: Date
  updatedAt: Date
}

export enum PlanType {
  FREE = 'FREE',
  STARTER = 'STARTER',
  PRO = 'PRO',
  AGENCY = 'AGENCY',
}

export enum SubStatus {
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
  PAUSED = 'PAUSED',
}

export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
}

export interface UserProfile extends User {
  subscription?: Subscription
  credits?: UserCredit
}
