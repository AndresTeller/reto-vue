import type { IMedicine } from "server/medicine/interfaces/medicine.interface";

export const createMedicine = async (url: string, medicine:IMedicine) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medicine)
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export const deleteMedicine = async (id: string) => {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`http://localhost:3000/api/v1/medicines/${id}`, options);
  return response;
}