import { Request, Express } from 'express'
import multer, { Multer }  from 'multer'
import dotenv from 'dotenv'

dotenv.config()
const env: NodeJS.ProcessEnv = process.env
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO

// SET STORAGE
var storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: any) => {
        cb(null, media_root+req.body.file_path)
    },
    filename: (req: Request, file: Express.Multer.File, cb: any) => {
        const ext: string = '.'+file.mimetype.split('/')[1]
        cb(null, Date.now()+ext)
    }
})

export const upload = multer({ storage: storage })