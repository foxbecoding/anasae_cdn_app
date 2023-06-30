import { Request, Response } from 'express'

export const AddImage = async (req:Request, res: Response): Promise<void> => {
    res.json({message: "POST new tea"}); 
}