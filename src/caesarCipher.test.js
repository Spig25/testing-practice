const caesarCipher = require(`./caesarCipher`)

test(`shifts string up 1 character`, () => {
  expect(caesarCipher(`hello`, 1)).toBe(`ifmmp`)
})

test(`shifts string up 25 character`, () => {
  expect(caesarCipher(`hello`, 25)).toBe(`gdkkn`)
})

test(`keeps capitalization`, () => {
  expect(caesarCipher(`Hello`, 1)).toBe(`Ifmmp`)
})

test(`keep spacing`, () => {
  expect(caesarCipher(`Hello friend`, 1)).toBe(`Ifmmp gsjfoe`)
})

test(`keeps punctuation`, () => {
  expect(caesarCipher(`hello.`, 1)).toBe(`ifmmp.`)
})

test(`only shifts 0-25`, () => {
  expect(caesarCipher(`hello`, 26)).toBe(`use shift value between 0 and 25`)
})
