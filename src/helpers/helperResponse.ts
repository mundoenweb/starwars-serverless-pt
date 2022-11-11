import { JsonObject } from 'type-fest'
import { helperCreateError } from './helperCreateError'

type N = number
type msg = string | undefined

interface response {
  statusCode: number
  body: string
  headers: JsonObject
}
interface body {
  status: N
  data: JsonObject | undefined
  msg: string
}

const msgCode: any = {
  200: 'Consulta exitosa',
  201: 'Registro exitoso'
}

export const helperResponse = (data: any, status: N = 200, message?: msg): response => {
  const msg: string = message === undefined ? msgCode[status] : message
  const body: body = { status, data, msg }
  return {
    headers: { 'Content-Type': 'application/json' },
    statusCode: status,
    body: JSON.stringify(body)
  }
}

export const helperResponseError = (error: any): response => {
  const body: any = helperCreateError(error)
  return {
    statusCode: body.status,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }
}
