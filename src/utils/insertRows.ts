import { getAllElements } from './getAllElements'

export const insertRows = async (url: string, rows: any) => {
  const element = await getAllElements(url)
  rows.value = element
  // console.log(rows.value[0]);
  getNameMedicines(rows);
}

const getNameMedicines = (rows: any) => {
  for (let i = 0; i < rows.value.length; i++) {
    const rowMedicine = rows.value[i].medicines;
    console.log(rowMedicine)
    for (let j = 0; j < rowMedicine.length; j++) {
      const medicine = rowMedicine[j];
      rows.value[i].medicines[j] = medicine.name;
    }
  }
}
