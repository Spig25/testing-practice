const capitalize = require(`./capitalize`)

test(`takes string and returns with first char capitalized`, () => {
  expect(capitalize(`hello world`)).toEqual(`Hello world`)
})
