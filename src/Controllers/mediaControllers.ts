import { Request, Response } from 'express'



export const AddImage = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body)
    res.json({message: "POST new tea"}); 
}