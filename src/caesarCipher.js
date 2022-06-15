const lowerCaseAlphabet = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
]

const upperCaseAlphabet = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
]

const caesarCipher = (string, shift) => {
  if (shift > 26 || shift < 0) {
    return `use shift value between 0 and 26`
  }
  const stringArray = string.split(``)
  const newIndexArr = []
  stringArray.forEach((splitE) => {
    lowerCaseAlphabet.forEach((lowE, lowIndex) => {
      if (splitE.toLowerCase() === lowE) {
        newIndexArr.push(lowIndex)
      }
    })
  })
  const newLetterArr = []
  newIndexArr.forEach((newE, newIndex) => {
    if (stringArray[newIndex] === stringArray[newIndex].toUpperCase()) {
      upperCaseAlphabet.forEach((upperE, upperIndex) => {
        if (newE + shift === upperIndex) {
          newLetterArr.push(upperE)
        }
      })
    }
    if (stringArray[newIndex] === stringArray[newIndex].toLowerCase()) {
      lowerCaseAlphabet.forEach((lowE, lowIndex) => {
        if (newE + shift === lowIndex) {
          newLetterArr.push(lowE)
        }
      })
    }
  })
  const finalString = newLetterArr.join(``)
  return finalString
}

module.exports = caesarCipher
