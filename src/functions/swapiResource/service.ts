/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import config from '../../config/config'
import { helperTransforObjectSwapi } from '../../helpers/helperTransforObjectSwapi'

export const getAllResourceSWAPI = async (resource: string, queryString: string, query: any): Promise<any> => {
  let format: boolean = false
  const search = queryString === '' ? '' : `?${queryString}`

  const { data: swapi }: any = await axios(`${config.SWAPI}/${resource}/${search}`)

  if (query !== null || query.format !== undefined) format = true
  if (format !== null) return swapi

  const response = await helperTransforObjectSwapi(swapi)
  return response
}
