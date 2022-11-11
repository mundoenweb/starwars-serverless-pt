const isString = (str: string): boolean => {
  return typeof str === 'string'
}
const isInteger = (num: any): boolean => {
  const expNum: RegExp = /^[1-9-0]+$/
  return expNum.test(num)
}
const isNumber = (num: any): boolean => {
  const expNum: RegExp = /^[1-9-0,.]+$/
  return expNum.test(num)
}

export const parseFieldStrings = (text: string, nameField: string): string => {
  if (!isString(text)) {
    throw new Error(`El campo ${nameField} es incorrecto o no existe`)
  }
  return text.trim()
}
export const parseFieldNumberInteger = (numText: string, nameField: string): string => {
  if (!isInteger(numText)) {
    throw new Error(`El campo ${nameField} es incorrecto o no existe`)
  }
  return numText.trim()
}
export const parseFieldNumber = (numText: string, nameField: string): string => {
  if (!isNumber(numText)) {
    throw new Error(`El campo ${nameField} es incorrecto o no existe, error: (${numText})`)
  }
  return numText.trim()
}

export const parsePilots = (arrPilots: string[], nameField: string): string => {
  let pilots: string = ''
  if (arrPilots === undefined || arrPilots.length === 0) {
    throw new Error(`El campo ${nameField} debe se un array con almenos un piloto`)
  }
  for (const pilot of arrPilots) {
    if (!isString(pilot)) {
      throw new Error('El nombre del piloto solo puede ser texto')
    }
    pilots += pilot
  }
  return pilots
}
export const parseFilms = (arrFilms: string[], nameField: string): string => {
  let films: string = ''
  if (arrFilms === undefined || arrFilms.length === 0) {
    throw new Error(`El campo ${nameField} debe se un array con almenos una pelcula`)
  }
  for (const film of arrFilms) {
    if (!isString(film)) {
      throw new Error('El nombre de la nave solo puede ser texto')
    }
    films += film
  }
  return films
}
