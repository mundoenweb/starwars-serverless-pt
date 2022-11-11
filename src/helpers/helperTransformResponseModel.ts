export const helperTransformResponseModel = (arr: any): any[] => {
  const newArr: any[] = []
  for (const starship of arr) {
    const newStarship: any = {}
    for (const key in starship) {
      const element = starship[key]
      if (key === 'pilots' || key === 'films') {
        newStarship[key] = element.split(',')
        continue
      }
      newStarship[key] = element
    }
    newArr.push(newStarship)
  }
  return newArr
}
