import { Request, Response } from 'express'

/**
 * GET /
 * Base route
 */
export const index = (req: Request, res: Response) =>
  res.send('Inventory API - sward move June 2019 🌲')
