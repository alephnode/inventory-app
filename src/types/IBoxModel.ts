import { Document } from 'mongoose'

export default interface IBoxModel extends Document {
  box: string
  items: string
}
