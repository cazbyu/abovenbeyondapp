export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "0004-above-n-beyond-members": {
        Row: {
          id: string
          name: string
          business_name: string | null
          google_profile: string | null
          phone: string | null
          photo_url: string | null
          ask_date: string | null
          email: string | null
          website: string | null
          ask_text: string | null
          facebook: string | null
          instagram: string | null
          linkedin: string | null
          youtube: string | null
          created_at: string | null
          industry: string | null
          specialty: string | null
        }
        Insert: {
          id: string
          name: string
          business_name?: string | null
          google_profile?: string | null
          phone?: string | null
          photo_url?: string | null
          ask_date?: string | null
          email?: string | null
          website?: string | null
          ask_text?: string | null
          facebook?: string | null
          instagram?: string | null
          linkedin?: string | null
          youtube?: string | null
          created_at?: string | null
          industry?: string | null
          specialty?: string | null
        }
        Update: {
          id?: string
          name?: string
          business_name?: string | null
          google_profile?: string | null
          phone?: string | null
          photo_url?: string | null
          ask_date?: string | null
          email?: string | null
          website?: string | null
          ask_text?: string | null
          facebook?: string | null
          instagram?: string | null
          linkedin?: string | null
          youtube?: string | null
          created_at?: string | null
          industry?: string | null
          specialty?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}