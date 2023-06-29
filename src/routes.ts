import express, { Express, Request, Response } from 'express'

const app: Express = express();

app.get('/assets/:file', (req: Request, res: Response) => {
    // Handle the static asset request here
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
});