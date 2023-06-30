import { Request } from 'express'
import multer  from 'multer'

// SET STORAGE
var storage = multer.diskStorage({
    destination: (req: Request, file: any, cb: any) => {
      cb(null, '../public/media/')
    },
    filename: (req: Request, file: any, cb: any) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
})

export const upload = multer({ storage: storage })