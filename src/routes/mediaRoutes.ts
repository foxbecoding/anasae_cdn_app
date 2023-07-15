import cors from 'cors'
import express from 'express'
import { AddImage } from '../Controllers/mediaController'
import { upload } from '../middleware/multer'
import { corsOptionsDelegate } from '../middleware/cors'

export const mediaRoute = express.Router()

mediaRoute.post(
    '/upload-image/', 
    cors(corsOptionsDelegate), 
    upload.single('image'), 
    AddImage,
)

mediaRoute.post(
    '/upload-multi-image/', 
    cors(corsOptionsDelegate), 
    upload.array('images'), 
    AddImage,
)