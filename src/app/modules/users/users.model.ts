import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'
// 2. Create a Schema corresponding to the document interface
type UserModel = Model<IUser, object>
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
export const User = model<IUser, UserModel>('User', userSchema)
