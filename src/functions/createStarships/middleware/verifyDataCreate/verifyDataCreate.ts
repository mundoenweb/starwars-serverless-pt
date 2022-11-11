
import * as parse from './helper/helperValidatingCardFieldsAndParseData'
import createError from 'http-errors'
import { MiddlewareObj } from '@middy/core'
import { Context, ALBEvent } from 'aws-lambda'

interface IRequest {
  event: ALBEvent | any
  context?: Context
}

export const verifyDataCreate = (): MiddlewareObj<any> => {
  const MiddlewareBefore = (request: IRequest): void => {
    const { event } = request
    const data: any = event.body

    try {
      if (data === null || data === undefined) {
        throw new Error('Debe enviar todos los datos')
      }

      const card: any = {
        name: parse.parseFieldStrings(data.name, 'name'),
        model: parse.parseFieldStrings(data.model, 'model'),
        manufacturer: parse.parseFieldStrings(data.manufacturer, 'manufacturer'),
        cost_in_credits: parse.parseFieldNumberInteger(data.cost_in_credits, 'cost_in_credits'),
        length: parse.parseFieldNumberInteger(data.length, 'length'),
        max_atmosphering_speed: parse.parseFieldNumberInteger(data.max_atmosphering_speed, 'max_atmosphering_speed'),
        crew: parse.parseFieldNumberInteger(data.crew, 'crew'),
        passengers: parse.parseFieldNumberInteger(data.passengers, 'passengers'),
        cargo_capacity: parse.parseFieldNumberInteger(data.cargo_capacity, 'cargo_capacity'),
        consumables: parse.parseFieldStrings(data.consumables, 'consumables'),
        hyperdrive_rating: parse.parseFieldNumber(data.hyperdrive_rating, 'hyperdrive_rating'),
        MGLT: parse.parseFieldNumberInteger(data.MGLT, 'MGLT'),
        starship_class: parse.parseFieldStrings(data.name, 'starship_class'),
        pilots: parse.parsePilots(data.pilots, 'pilots'),
        films: parse.parseFilms(data.films, 'films')
      }

      request.event = card
    } catch (error: any) {
      throw createError(400, JSON.stringify({ message: error.message }))
    }
  }

  return {
    before: MiddlewareBefore
  }
}
