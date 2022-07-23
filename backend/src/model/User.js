import mongoose from 'mongoose'
import moment from 'moment-timezone'

const tmzPt = moment.tz(Date.now(), 'Portugal')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true
    },
    name: { type: String },
    password: { type: String }, // TODO: remove field and put the right password instead
    createdAt: { type: Date, default: tmzPt },
    updatedAt: { type: Date, default: tmzPt }
  },
  { strict: false, versionKey: false, timestamps: false }
)

const User = mongoose.model('users', UserSchema)

export default User
