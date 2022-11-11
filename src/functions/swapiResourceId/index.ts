import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { verifyParamId } from '../../middleware/verifyParamId'
import { verifyParamResource } from '../../middleware/verifyParamResource'
import { getResourceSWAPI } from './service'

// "queryStringParameters": null,
export const swapiResourceId = middy(async (event: any): Promise<any> => {
  try {
    const params = event.pathParameters
    const queryString = event.rawQueryString
    const response = await getResourceSWAPI(params, queryString)
    return helperResponse(response)
  } catch (error: any) {
    return helperResponseError(error)
  }
})

swapiResourceId
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(verifyParamResource())
  .use(verifyParamId())
  .use(httpErrorHandler())
