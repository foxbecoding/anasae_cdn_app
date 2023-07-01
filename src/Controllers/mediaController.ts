import { Request, Response, NextFunction } from 'express'

export const AddImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const file = req.file
    if (!file) {
        const error: any  = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.json({message: "Uploaded"}); 
}