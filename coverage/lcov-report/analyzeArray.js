const analyzeArray = (array) => {
  const object = {}

  let total = 0
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      break
    }
    total += array[i]
  }

  object.average = total / array.length
  object.length = array.length
  object.min = Math.min(...array)
  object.max = Math.max(...array)
  return object
}

module.exports = analyzeArray
