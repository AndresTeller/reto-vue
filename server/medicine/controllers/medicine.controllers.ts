import { Request, Response } from 'express'
import medicineModel from '../models/medicine.model'

export const getAllMedicines = async (req: Request, res: Response) => {
  try {
    const medicines = await medicineModel.find({})
    res.status(200).json({ ok: true, data: medicines })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const getMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await medicineModel.findById(req.params.id)
    res.status(200).json({ ok: true, data: medicine })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const createMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await medicineModel.create(req.body)
    res.status(200).json({ ok: true, data: medicine })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await medicineModel.findOneAndDelete({ _id: req.params.id })
    res.status(200).json({ ok: true, data: medicine })
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}

export const updateMedicine = async (req: Request, res: Response) => {
  try {
    const options = {
      new: true,
      runValidators: true
    }
    const updateMedicine = req.body;
    const medicineID = req.params.id;
    const medicine = await medicineModel.findByIdAndUpdate(medicineID, updateMedicine, options)

    res.status(200).json({ ok: true, data: medicine });
  } catch (error) {
    res.status(400).json({ ok: false, message: 'Something goes wrong' })
  }
}
