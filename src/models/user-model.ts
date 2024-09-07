import { model, Schema } from 'mongoose'
import { UserRole, UserStatus, UserType } from '../types/user-types.js'
import { ColNames } from './col-names.js'

const userSchema = new Schema<UserType>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: UserRole, required: true },
    status: { type: String, enum: UserStatus, required: true },
    dob: { type: Date, required: true },
    profile: { type: String },
  },
  {
    timestamps: true,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

export const UserModel = model(ColNames.User, userSchema)
