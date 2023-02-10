const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TaskSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: true
    },
    deskripsi: {
      type: String,
      required: false
    },
    selesai: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
TaskSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Task', TaskSchema)
