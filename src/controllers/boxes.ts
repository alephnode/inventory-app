import { Request, Response } from 'express'
import Box from '../models/Box'
import IBoxModel from '../types/IBoxModel'

export const getBoxes = (req: Request, res: Response) =>
  Box.find((err: Error, doc: IBoxModel[]) => res.send(doc))

export const addBox = (req: Request, res: Response) => {
  const newBox = new Box(req.body)
  return newBox.save((err: Error, doc: IBoxModel) => res.send(doc))
}

export const updateBox = (req: Request, res: Response) =>
  Box.findByIdAndUpdate(
    <String>req.params.id,
    { $set: req.body },
    (err: Error, doc: IBoxModel) => res.send(err ? err : {})
  )
