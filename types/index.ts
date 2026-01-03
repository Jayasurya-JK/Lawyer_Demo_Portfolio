export interface Metadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title: string
    description: string
    type: string
    url?: string
    images?: string[]
  }
  twitter?: {
    card: string
    title: string
    description: string
    images?: string[]
  }
}

export interface PracticeArea {
  id: string
  title: string
  description: string
  icon: string
  details: string
  process: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  readTime: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  consent: boolean
}

export interface LawyerProfile {
  name: string
  title: string
  tagline: string
  experience: number
  education: string[]
  certifications: string[]
  memberships: string[]
  philosophy: string
  specializations: string[]
}
