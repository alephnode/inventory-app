import { Request, Response } from 'express'
import Box from '../models/Box'
import IBoxModel from '../types/IBoxModel'

export const getBoxes = (req: Request, res: Response) =>
  Box.find((err: Error, doc: IBoxModel[]) => res.send(doc))
