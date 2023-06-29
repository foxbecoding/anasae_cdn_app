import express, { Express } from 'express'
import dotenv from 'dotenv'
import { routes } from './routes'

dotenv.config()
const app: Express = express()
const env: NodeJS.ProcessEnv = process.env
const port: string|number = process.env.PORT || 3058
const MEDIA_ROOT = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO

// routes
app.use('/', routes);
app.use(express.static(`${MEDIA_ROOT}`))

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})