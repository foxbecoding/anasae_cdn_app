import express, { Express } from 'express'
import dotenv from 'dotenv'
import { routes } from './routes'
import http from 'http'

dotenv.config()
const app: Express = express()
const env: NodeJS.ProcessEnv = process.env
const port: string|number = process.env.PORT || 3058
const host: string = process.env.HOST || '127.0.0.1'
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO
const server: any = http.createServer(app);

// routes
app.use('/', routes);
app.use(express.static(`${media_root}`))

// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://127.0.0.1:${port}`)
// })

server.listen(port, host);
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
})