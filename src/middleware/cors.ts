import dotenv from 'dotenv'

dotenv.config()

const env: NodeJS.ProcessEnv = process.env
const allowlist = [
    `${env.ALLOWED_HOST1}`, 
    `${env.ALLOWED_HOST2}`, 
    `${env.ALLOWED_HOST3}`,
    `${env.ALLOWED_HOST4}`
]

export const corsOptionsDelegate = (req: any, callback: Function) => {
    req.headers.origin = req.headers.origin || req.headers.host
    let corsOptions = allowlist.indexOf(req.headers.origin) !== -1 ? { origin: true } : { origin: false }
    if (corsOptions.origin) { callback(null, corsOptions);  return; }
    callback('origin not allowed', corsOptions) 
}