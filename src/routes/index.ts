import express, { Router } from 'express'
import { mediaRoute } from './mediaRoutes'
import { defaultRoute } from './defaultRoute'

export const routes: Router = express.Router()

routes.use(express.json())
routes.use(defaultRoute)
routes.use(mediaRoute)