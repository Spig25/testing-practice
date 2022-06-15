const reverseString = require(`./reverseString`)

test(`reverses string`, () => {
  expect(reverseString(`hello world`)).toBe(`dlrow olleh`)
})
