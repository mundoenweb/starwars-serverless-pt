import { modelGetStarShip } from './models'

export const serviceGetStarship = async (id: number): Promise<{}> => {
  const response = await modelGetStarShip(id)
  return response
}
