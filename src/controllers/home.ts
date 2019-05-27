import { Request, Response } from 'express'

/**
 * GET /
 * Base route
 */
export let index = (req: Request, res: Response) =>
  res.send('Welcome to the Inventory API')
