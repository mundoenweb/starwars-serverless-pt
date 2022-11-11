import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { verifyParamId } from '../../middleware/verifyParamId'
import { serviceGetStarship } from './service'

export const getStarship = middy(async (event: any): Promise<any> => {
  try {
    const id: number = event.pathParameters.id
    const response = await serviceGetStarship(id)
    return helperResponse(response)
  } catch (error: any) {
    return helperResponseError(error)
  }
})

getStarship
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(verifyParamId())
  .use(httpErrorHandler())
