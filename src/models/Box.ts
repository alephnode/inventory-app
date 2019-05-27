import { Schema, model } from 'mongoose'
import IBoxModel from '../types/IBoxModel'

const BoxSchema = new Schema({
  box: String,
  items: String
})

export default model<IBoxModel>('Box', BoxSchema, 'boxes')
