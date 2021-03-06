import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import cors from 'cors'
import mongoose from 'mongoose'
import { MONGODB_URI } from './util/secrets'

// Controllers
import * as homeController from './controllers/home'
import * as boxController from './controllers/boxes'

// MongoDB connection
const mongoUrl = MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xssProtection(true))
app.use(cors())

/**
 * Routes
 */
app.get('/', homeController.index)
app.get('/boxes', boxController.getBoxes)
app.post('/boxes', boxController.addBox)
app.put('/boxes/:id', boxController.updateBox)
app.delete('/boxes/:id', boxController.deleteBox)

export default app
