import type { IMedicine } from "server/medicine/interfaces/medicine.interface";

export const getAllMedicines = async (url:string) => {
  const response = await fetch(url);
  const {data} = await response.json();
  return data;
}

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