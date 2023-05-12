import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routerMedicine from './medicine/routes/medicine.routes';
import routerOrders from './medical-orders/routes/medicalOrders.routes'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routerMedicine)
app.use(routerOrders);

export default app;