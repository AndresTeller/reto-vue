import { Router } from 'express'
import {
  createMedicalOrder,
  getAllMedicalOrders,
  deleteMedicalOrder,
  getMedicalOrder,
  updateMedicalOrder
} from '../controllers/medicalOrders.controllers'

const router = Router()

router.get('/api/v1/orders', getAllMedicalOrders)

router.get('/api/v1/orders/:id', getMedicalOrder)

router.post('/api/v1/orders/', createMedicalOrder)

router.delete('/api/v1/orders/:id', deleteMedicalOrder)

router.patch('/api/v1/orders/:id', updateMedicalOrder)

export default router
