
export function setupCounter(n, a, s, t) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    n.innerHTML = `${counter}`
  }
  n.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


let number = 0

const setCounter = (n) => {
  number = n
}

export const num= (element) => { 
  element.innerHTML = `${number}`
}

export const add= (element) => {
  element.addEventListener('click', () => setCounter(number + 1))
  setCounter(0)
}

export function addNumber(number) {
  number + 1
}

export const sub= (element) => {
  element.addEventListener('click', () => number - 1)
}

export const set= (element) => {
  element.addEventListener('click', () => number = 0)
}
console.log(number);