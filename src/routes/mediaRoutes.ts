import express, { Express, Request, Response } from 'express'

export const mediaRoute = express.Router();

mediaRoute.get('/media/:file', (req: Request, res: Response) => {
    // console.log(req.body)
    // res.send()
})

// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server')
// });