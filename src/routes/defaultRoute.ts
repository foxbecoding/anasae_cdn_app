import { Request, Response, Router } from 'express'

export const defaultRoute = Router()

defaultRoute.get('/', (req: Request, res: Response) => {
    res.send("ANASAE NOW")
})