import middy from '@middy/core'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { serviceGetStarShips } from './service'

// "queryStringParameters": null,
export const getStarships = middy(async (_event: any): Promise<any> => {
  try {
    const response = await serviceGetStarShips()
    return helperResponse(response)
  } catch (error: any) {
    return helperResponseError(error)
  }
})

getStarships
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
