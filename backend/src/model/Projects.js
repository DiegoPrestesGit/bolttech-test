import mongoose from 'mongoose'
import moment from 'moment-timezone'

const tmzPt = moment.tz(Date.now(), 'Portugal')

const ProjectSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true
    },
    name: { type: String },

    createdAt: { type: Date, default: tmzPt },
    updatedAt: { type: Date, default: tmzPt }
  },
  { strict: false, versionKey: false, timestamps: false }
)

const Project = mongoose.model('Projects', ProjectSchema)

export default Project
