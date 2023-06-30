import express, { Express, Request, Response } from 'express'
import { AddImage } from '../Controllers/mediaControllers'

export const mediaRoute = express.Router();

mediaRoute.post('/add-image/', AddImage)

