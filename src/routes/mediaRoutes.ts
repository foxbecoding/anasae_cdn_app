import cors from 'cors'
import express from 'express'
import { AddImage } from '../Controllers/mediaController'
import { upload } from '../middleware/multer'
import { mediaPermissions } from '../middleware/permissions'
import { corsOptionsDelegate } from '../middleware/cors'

export const mediaRoute = express.Router()

mediaRoute.post(
    '/add-image/', 
    cors(corsOptionsDelegate), 
    upload.single('image'), 
    mediaPermissions,
    AddImage
)