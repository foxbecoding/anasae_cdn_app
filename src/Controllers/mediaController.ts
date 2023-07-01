import { Request, Response, NextFunction } from 'express'

export const AddImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json({message: "Uploaded"}); 
}