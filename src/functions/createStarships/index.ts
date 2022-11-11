import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { verifyDataCreate } from './middleware/verifyDataCreate/verifyDataCreate'
import { serviceCreateStarships } from './service'

export const createStarships = middy(async (data: any): Promise<any> => {
  try {
    const response = await serviceCreateStarships(data)
    return helperResponse(response, 201, 'Starships creado con exito')
  } catch (error: any) {
    return helperResponseError(error)
  }
})

createStarships
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(verifyDataCreate())
  .use(httpErrorHandler())
