import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './medicine/routes/medicine.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router)

export default app;