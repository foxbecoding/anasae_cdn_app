import express, { Express, Request, Response, Router } from 'express'

export const defaultRoute = Router()

defaultRoute.get('/', (req: Request, res: Response) => {
    res.send("What's up doc ?!")
})