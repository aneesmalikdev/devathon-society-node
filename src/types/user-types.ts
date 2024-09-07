import { Document } from 'mongoose'

export enum UserRole {
  ADMIN = 'admin',
  RESIDENT = 'resident',
  SUPORT = 'support',
}
export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
  
}
export interface UserType extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  role: UserRole
  status: UserStatus
  dob: Date
  profile: string
}
