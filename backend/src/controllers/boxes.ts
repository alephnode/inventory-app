import { Request, Response } from 'express'
import Box from '../models/Box'
import IBoxModel from '../types/IBoxModel'

const stripLetters = (w: String) => parseInt(w.replace(/\D/g, ''))

export const getBoxes = (_1: Request, res: Response) =>
  Box.find((err: Error, doc: IBoxModel[]) =>
    res.send(
      doc.sort(
        (a: IBoxModel, b: IBoxModel) =>
          stripLetters(a.box) - stripLetters(b.box)
      )
    )
  )

export const addBox = (req: Request, res: Response) => {
  const newBox = new Box(req.body)
  return newBox.save((err: Error, doc: IBoxModel) => res.send(doc))
}

export const updateBox = (req: Request, res: Response) =>
  Box.findByIdAndUpdate(
    <String>req.params.id,
    { $set: req.body },
    (err: Error) => res.send(err ? err : {})
  )

export const deleteBox = (req: Request, res: Response) =>
  Box.findByIdAndRemove(<String>req.params.id, (err: Error) =>
    res.send(err ? err : {})
  )
