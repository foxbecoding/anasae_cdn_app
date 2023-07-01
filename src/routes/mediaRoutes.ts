import express from 'express'
import { AddImage } from '../Controllers/mediaControllers'
import { upload } from '../multerConfig'
import cors from 'cors'
import { corsOptionsDelegate } from '../corsConfig'

export const mediaRoute = express.Router()

mediaRoute.post('/add-image/', cors(corsOptionsDelegate), upload.single('image'), AddImage)