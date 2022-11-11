import { modelDeletStarShip } from './models'

export const serviceDeleteStarship = async (id: number): Promise<boolean> => {
  const response = await modelDeletStarShip(id)
  return response
}
