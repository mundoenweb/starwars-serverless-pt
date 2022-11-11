import { helperTranstaleAzure } from './helperTranstaleAzure'

const helperGetParamsTranslate = async (objectSwapi: any): Promise<any[]> => {
  const keysTranslate: any = []
  for (const key in objectSwapi) {
    const keyArr: any[] = key.split('_')
    if (keyArr.length > 1) {
      keysTranslate.push({ text: keyArr.join(' ') })
      continue
    }
    keysTranslate.push({ text: key })
  }
  const translate = await helperTranstaleAzure(keysTranslate)
  return translate
}

export const helperTransforObjectSwapi = async (swapi: any): Promise<any> => {
  const newSwapi: any = {}
  let data = []
  const dataTransform = []

  let keysTranslate: any
  if (swapi.results !== undefined) {
    newSwapi.contador = swapi.count
    newSwapi.siguiente = swapi.next
    newSwapi.anterior = swapi.previous
    data = swapi.results

    keysTranslate = await helperGetParamsTranslate(swapi.results[0])
  } else {
    keysTranslate = await helperGetParamsTranslate(swapi)
    data = [swapi]
  }

  for (const iterator of data) {
    let count = 0
    const newData: any = {}
    for (const key in iterator) {
      const element = iterator[key]
      const dataKey: string = keysTranslate[count].translations[0].text.split(' ').join('_')
      newData[dataKey] = element
      count++
    }
    dataTransform.push(newData)
  }

  if (dataTransform.length > 1) {
    newSwapi.results = dataTransform
    return newSwapi
  }

  return dataTransform[0]
}
