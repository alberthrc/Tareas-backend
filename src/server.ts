import express from 'express';

import dotenv from 'dotenv';

import { connectDB } from './config/db';

import ProjectRouter from './routes/projectRoutes';



dotenv.config();
connectDB();
const app = express();

app.use(express.json());


// Routes   
app.use('/api/projects', ProjectRouter);




export default app;