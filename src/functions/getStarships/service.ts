import { modelgetStarShips } from './models'

export const serviceGetStarShips = async (): Promise<any[]> => {
  const response = await modelgetStarShips()
  return response
}
