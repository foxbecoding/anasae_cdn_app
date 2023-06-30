import { Request, Response } from 'express'
import multer  from 'multer'
// const multer = require('multer')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
      cb(null, 'uploads')
    },
    filename: function (req: Request, file: any, cb: any) {
      cb(null, file.fieldname + '-' + Date.now())
    }
})

export const upload = multer({ storage: storage })