/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import config from '../../config/config'
import { helperTransforObjectSwapi } from '../../helpers/helperTransforObjectSwapi'

export const getResourceSWAPI = async (params: any, queryString: string): Promise<void> => {
  const { resource, id } = params
  const search = queryString === '' ? '' : `?${queryString}`

  const { data: swapi }: any = await axios(`${config.SWAPI}/${resource}/${id}/${search}`)
  const response = await helperTransforObjectSwapi(swapi)

  return response
}
