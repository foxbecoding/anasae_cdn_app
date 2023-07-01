const allowlist = ['127.0.0.1:3058']

export const corsOptionsDelegate = (req: any, callback: Function) => {
    req.headers.origin = req.headers.origin || req.headers.host
    let corsOptions = allowlist.indexOf(req.headers.origin) !== -1 ? { origin: true } : { origin: false }
    if (corsOptions.origin) { callback(null, corsOptions);  return; }
    callback('origin not allowed', corsOptions) 
}