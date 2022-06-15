const caesarCipher = require(`./caesarCipher`)

test(`shifts string up 1 character`, () => {
  expect(caesarCipher(`hello`, 1)).toBe(`ifmmp`)
})

test(`shifts string up 5 character`, () => {
  expect(caesarCipher(`hello`, 5)).toBe(`mjqqt`)
})

test(`keeps capitalization`, () => {
  expect(caesarCipher(`Hello`, 1)).toBe(`Ifmmp`)
})

test(`keep spacing`, () => {
  expect(caesarCipher(`Hello friend`, 1)).toBe(`Ifmmp gsjfoe`)
})

test(`only shifts 0-26`, () => {
  expect(caesarCipher(`hello`, 27)).toBe(`use shift value between 0 and 26`)
})
