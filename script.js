export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = "Two Words"
  const result = []
  const count = +1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "spaces") {
      count++
    }
  }
  return arr.filter((word) => word !== "").length
}

export function exercise05(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (((currentElement === "65") == currentElement) == "90") {
      return true
    } else {
      return false
    }
  }
  return false
}

export function exercise08(args) {
  const input = args
  let result = []

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    if (((currentElement === "e") == currentElement) === "3") {
      result.push()
    }
    result.push(currentElement)
  }
  return result.join("")
}
