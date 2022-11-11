import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { verifyParamId } from '../../middleware/verifyParamId'
import { serviceDeleteStarship } from './service'

export const deleteStarship = middy(async (event: any): Promise<any> => {
  try {
    const id: number = event.pathParameters.id
    await serviceDeleteStarship(id)
    return helperResponse([], 200, 'Starship eliminado conexito')
  } catch (error: any) {
    return helperResponseError(error)
  }
})

deleteStarship
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(verifyParamId())
  .use(httpErrorHandler())
