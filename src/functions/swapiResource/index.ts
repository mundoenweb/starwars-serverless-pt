import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { verifyParamResource } from '../../middleware/verifyParamResource'
import { helperResponse, helperResponseError } from '../../helpers/helperResponse'
import { getAllResourceSWAPI } from './service'

// "queryStringParameters": null,
export const swapiResource = middy(async (event: any): Promise<any> => {
  try {
    const resource = event.pathParameters.resource
    const queryString = event.rawQueryString
    const query = event.queryStringParameters
    const response = await getAllResourceSWAPI(resource, queryString, query)
    return helperResponse(response)
  } catch (error: any) {
    return helperResponseError(error)
  }
})

swapiResource
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(verifyParamResource())
  .use(httpErrorHandler())
