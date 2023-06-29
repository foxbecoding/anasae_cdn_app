import express, { Express } from 'express'
import dotenv from 'dotenv';
import { routes } from './src/routes'

dotenv.config()

const app: Express = express();
const port: string|number = process.env.PORT || 6000

// routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});