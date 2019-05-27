import { Request, Response } from 'express'
import Box from '../models/Box'

// TODO: Fix doc type
export let getBoxes = (req: Request, res: Response) =>
  Box.find(function(err: Error, doc: any) {
    return res.send(doc)
  })
