import {
  Response as Res
} from 'express'

const helperResponse = (res: Res, data: any, code: number = 200, message?: string): void => {
  const response = { data, message, status: code }
  res.status(code)
  res.json(response)
}

export { helperResponse }
