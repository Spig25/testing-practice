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

const charIsNotLetter = (char) => {
  const regex = /\s|\W/g
  if (regex.test(char)) {
    return true
  }
  return false
}

const caesarCipher = (string, shift) => {
  if (shift > 25 || shift < 0) {
    return `use shift value between 0 and 25`
  }
  const stringArray = string.split(``)
  const newIndexArr = []
  stringArray.forEach((splitE) => {
    if (charIsNotLetter(splitE)) {
      newIndexArr.push(splitE)
    } else {
      lowerCaseAlphabet.forEach((lowE, lowIndex) => {
        if (splitE.toLowerCase() === lowE) {
          newIndexArr.push(lowIndex)
        }
      })
    }
  })
  const newLetterArr = []
  newIndexArr.forEach((newE, newIndex) => {
    const distanceFromEnd = 26 - newE
    if (charIsNotLetter(newE) === false) {
      if (stringArray[newIndex] === stringArray[newIndex].toUpperCase()) {
        lowerCaseAlphabet.forEach((lowerE, lowerIndex) => {
          if (shift < distanceFromEnd && newE + shift === lowerIndex) {
            newLetterArr.push(lowerE.toUpperCase())
          }
          if (shift >= distanceFromEnd) {
            const difference = shift - 26
            if (newE + difference === lowerIndex) {
              newLetterArr.push(lowerE.toUpperCase())
            }
          }
        })
      }
      if (stringArray[newIndex] === stringArray[newIndex].toLowerCase()) {
        lowerCaseAlphabet.forEach((lowerE, lowerIndex) => {
          if (shift < distanceFromEnd && newE + shift === lowerIndex) {
            newLetterArr.push(lowerE)
          }
          if (shift >= distanceFromEnd) {
            const difference = shift - 26
            if (newE + difference === lowerIndex) {
              newLetterArr.push(lowerE)
            }
          }
        })
      }
    } else {
      newLetterArr.push(newE)
    }
  })
  const finalString = newLetterArr.join(``)
  return finalString
}

module.exports = caesarCipher
