const allowlist = ['http://127.0.0.1:8000']
export const corsOptionsDelegate = (req: any, callback: Function) => {
    let corsOptions = allowlist.indexOf(req.header('Origin')) !== -1 ? { origin: true } : { origin: false }
    callback(null, corsOptions) // callback expects two parameters: error and options
}