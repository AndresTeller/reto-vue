import { IMedicine } from "../../medicine/interfaces/medicine.interface"

export interface IMedicalOrder extends Document{
  name: string
  lastName: string
  idNumber: string
  eps: string
  medicines: IMedicine[]
  comments: string
  doctorSignature: string
  createdAt?: Date
}
