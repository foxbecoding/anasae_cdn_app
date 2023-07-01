import { Request} from 'express'
import multer  from 'multer'
import dotenv from 'dotenv'

dotenv.config()
const env: NodeJS.ProcessEnv = process.env
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO

const config = {
    storage: multer.diskStorage({
        destination: (req: Request, file: Express.Multer.File, cb: Function) => {
            cb(null, media_root+req.body.file_path)
        },
        filename: (req: Request, file: Express.Multer.File, cb: Function) => {
            const ext: string = '.'+file.mimetype.split('/')[1]
            cb(null, Date.now()+ext)
        }
    }),

    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => {
        if (!req.body.file_path) {
            const error: any  = new Error('Please specify file path')
            cb(error)
        }
        cb(null, true)  
    }
}



export const upload = multer(config)