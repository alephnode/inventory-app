import { stripLetters } from '../src/controllers/boxes'

test('Should strip whitespace characters', () => {
  const result = stripLetters('A342')
  expect(result).toBe(342)
})
