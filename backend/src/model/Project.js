import mongoose from 'mongoose'
import moment from 'moment-timezone'

const tmzPt = moment.tz(Date.now(), 'Portugal')

const ProjectSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false
    },
    name: { type: String },
    startDate: { type: String },
    finishDate: { type: String },
    createdAt: { type: Date, default: tmzPt },
    updatedAt: { type: Date, default: tmzPt }
  },
  { strict: false, versionKey: false, timestamps: false }
)

const Project = mongoose.model('projects', ProjectSchema)

export default Project
