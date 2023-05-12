import app from './app'
import dotenv from 'dotenv'
import { connectDB } from './database/mongodb'
dotenv.config()
const PORT = process.env.PORT
const URL = process.env.MONGO_URI || "localhost:5000"

//npx tsc --init para leer typescript
connectDB(URL);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));