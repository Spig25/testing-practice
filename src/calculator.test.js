const calculator = require(`./calculator`)

test(`calculator adds`, () => {
  expect(calculator.sum(4, 2)).toBe(6)
})

test(`calculator subtracts`, () => {
  expect(calculator.subtract(4, 2)).toBe(2)
})

test(`calculator divides`, () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test(`calculator multiplies`, () => {
  expect(calculator.multiply(4, 2)).toBe(8)
})
