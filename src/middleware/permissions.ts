import { Request, Response, NextFunction } from 'express'

export const mediaPermissions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const file = req.file
    if (!file) {
        const error: any  = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    if (!req.body.file_path) {
        
    }
    return next()
}