import { Schema, model } from 'mongoose'
import { IMedicine } from '../interfaces/medicine.interface'

const medicineSchema = new Schema<IMedicine>({
  name: {
    type: String,
    required: [true, 'Must provide a name']
  },
  description: {
    type: String,
    required: [true, 'Must provide a description']
  },
  qty: {
    type: Number,
    required: [true, 'Must provide a quantity']
  },
  provider: {
    type: String,
    required: [true, 'Must provide a provider']
  },
  doctorSignature: {
    type: String,
    required: [true, 'Must provide a doctor signature']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model<IMedicine>('Medicine', medicineSchema)
