import moongose from 'mongoose'

export const connectDB = async (url: string) => {
  try {
    const db = await moongose.connect(url)
    console.log(db.connection.name)
  } catch (error) {
    console.log(error)
  }
}