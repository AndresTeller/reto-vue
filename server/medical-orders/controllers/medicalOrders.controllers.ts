import { Request, Response } from 'express'
import medicalOrder from '../models/medicalOrders.model'

export const getAllMedicalOrders = async (req: Request, res: Response) => {
  try {
    const MedicalOrders = await medicalOrder.find({})
    res.status(200).json({ ok: true, data: MedicalOrders })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const getMedicalOrder = async (req: Request, res: Response) => {
  try {
    const order = await medicalOrder.findById(req.params.id)
    res.status(200).json({ ok: true, data: order })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const createMedicalOrder = async (req: Request, res: Response) => {
  try {
    const order = await medicalOrder.create(req.body)
    res.status(200).json({ ok: true, data: order })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const deleteMedicalOrder = async (req: Request, res: Response) => {
  try {
    const order = await medicalOrder.findOneAndDelete({ _id: req.params.id })
    res.status(200).json({ ok: true, data: order })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const updateMedicalOrder = async (req: Request, res: Response) => {
  try {
    const options = {
      new: true,
      runValidators: true
    }
    const updateMedicalOrder = req.body
    const MedicalOrderID = req.params.id
    const MedicalOrder = await medicalOrder.findByIdAndUpdate(MedicalOrderID, updateMedicalOrder, options)

    res.status(200).json({ ok: true, data: MedicalOrder })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}
