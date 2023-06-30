import express, { Express, Request, Response } from 'express'
import { AddImageController } from '../Controllers/mediaControllers'

export const mediaRoute = express.Router();

mediaRoute.post('/add-image/', AddImageController)

// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server')
// });