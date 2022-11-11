import createError from 'http-errors'
import { MiddlewareObj } from '@middy/core'
import { Context, ALBEvent } from 'aws-lambda'

interface IRequest {
  event: ALBEvent | any
  context?: Context
}

export const verifyParamId = (): MiddlewareObj<any> => {
  const MiddlewareBefore = (request: IRequest): void => {
    const message: string = JSON.stringify({ message: 'Favor pasar un id valido (númerico)' })
    const { event } = request
    const { id }: any = event.pathParameters
    const expNum: RegExp = /^[1-9-0]+$/

    if (!expNum.test(id)) {
      throw createError.BadRequest(message)
    }

    event.pathParameters = { ...event.pathParameters, id: parseInt(id) }
  }

  return {
    before: MiddlewareBefore
  }
}
