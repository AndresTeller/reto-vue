import type { IMedicalOrder } from "server/medical-orders/interfaces/medicalOrders.interface" 

export const createMedicalOrder = async (url: string, medicalOrder: IMedicalOrder) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medicalOrder)
  }
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
