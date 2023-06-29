import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const port: string|number = process.env.PORT || 6000

app.get('/assets/:file', (req: Request, res: Response) => {
    // Handle the static asset request here
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
});
  
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});