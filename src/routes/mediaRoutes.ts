import express, { Express, Request, Response } from 'express'
import { AddImage } from '../Controllers/mediaControllers'
import { upload } from '../multerConfig'

export const mediaRoute = express.Router();

mediaRoute.post('/add-image/', upload.single('image'), AddImage)

