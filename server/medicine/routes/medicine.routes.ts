import { Router } from 'express'
import {
  createMedicine,
  getAllMedicines,
  deleteMedicine,
  getMedicine,
  updateMedicine
} from '../controllers/medicine.controllers'

const router = Router()

router.get('/api/v1/medicines', getAllMedicines)

router.get('/api/v1/medicines/:id', getMedicine)

router.post('/api/v1/medicines/', createMedicine)

router.delete('/api/v1/medicines/:id', deleteMedicine)

router.patch('/api/v1/medicines/:id', updateMedicine)

export default router
