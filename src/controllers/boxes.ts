import { Request, Response } from 'express'
import Box from '../models/Box'
import IBoxModel from '../types/IBoxModel'

export let getBoxes = (req: Request, res: Response) =>
  Box.find(function(err: Error, doc: IBoxModel[]) {
    return res.send(doc)
  })
