import { Schema, model } from 'mongoose'
import { medicineSchema } from '../../medicine/models/medicine.model'
import { IMedicalOrder } from '../interfaces/medicalOrders.interface'

const medicalOrderSchema = new Schema<IMedicalOrder>({
  name: {
    type: String,
    required: [true, 'Must provide a name']
  },
  lastName: {
    type: String,
    required: [true, 'Must provide a lastname']
  },
  idNumber: {
    type: String,
    required: [true, 'Must provide an id number']
  },
  eps: {
    type: String,
    required: [true, 'Must provide an eps']
  },
  medicines: [
    {
      type: medicineSchema,
      ref: 'Medicine',
      required: [true, 'Must provide medicines']
    }
  ],
  comments: {
    type: String,
    required: [true, 'Must provide a comment']
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

export default model<IMedicalOrder>('MedicalOrder', medicalOrderSchema)
