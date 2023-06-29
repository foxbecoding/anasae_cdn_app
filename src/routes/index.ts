import express from 'express'
import { mediaRoute } from './mediaRoutes'
import { defaultRoute } from './defaultRoute'

export const routes = express.Router()

routes.use(defaultRoute)