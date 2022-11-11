import { modelCreateStarShips } from './models'

export const serviceCreateStarships = async (data: any): Promise<void> => {
  const response = await modelCreateStarShips(data)
  return response
}
