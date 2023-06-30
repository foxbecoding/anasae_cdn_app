import express, { Express } from 'express'
import dotenv from 'dotenv'
import { routes } from './routes'

dotenv.config()
const app: Express = express()
const env: NodeJS.ProcessEnv = process.env
const port: string|number = process.env.PORT || 3058
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO

// routes
app.use('/', routes);
app.use(express.static(`${media_root}`))

app.listen(port, () => {
    console.log(`[server]: Server is running at http://127.0.0.1:${port}`)
})