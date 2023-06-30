import { Request, Response } from 'express'

export const AddImage = async (req: Request, res: Response): Promise<void> => {
    const file = req.file
    console.log(file)
    // res.send(file)
    res.json({message: "Uploaded"}); 
}