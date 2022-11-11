import createError from 'http-errors'
import { MiddlewareObj } from '@middy/core'
import { Context, ALBEvent } from 'aws-lambda'

interface IRequest {
  event: ALBEvent | any
  context?: Context
}

export const verifyParamResource = (): MiddlewareObj<any> => {
  const MiddlewareBefore = (request: IRequest): void => {
    const resourceValid: string[] = ['films', 'people', 'planets', 'species', 'starships', 'vehicle']
    const message: string = JSON.stringify({ message: `Favor pasar un id valido como: ${resourceValid.join(' ')}` })
    const { event } = request
    const { resource }: any = event.pathParameters

    if (!resourceValid.includes(resource)) {
      throw createError.BadRequest(message)
    }
  }

  return {
    before: MiddlewareBefore
  }
}
