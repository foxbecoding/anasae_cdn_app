import { Request, Response, NextFunction } from 'express'

export const mediaPermissions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.method)
    // if (!file) {
    //     const error: any  = new Error('Please upload a file')
    //     error.httpStatusCode = 400
    //     return next(error)
    // }
    return next()
}