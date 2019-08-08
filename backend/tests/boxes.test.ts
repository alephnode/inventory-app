import { stripLetters } from '../src/controllers/boxes'
import request from 'supertest'
import app from '../src/app'

test('Should strip whitespace characters', () => {
  const result: number = stripLetters('A342')
  expect(result).toBe(342)
})

test('Get the boxes', async () => {
  await request(app)
    .get('/boxes')
    .expect(200)
})
