import {
  NextFunction as Next,
  Request as Req,
  Response as Res
} from 'express'
import { helperCreateError } from '../../../utils/helperCreateError'

export const verifyParamId = (req: Req, _res: Res, next: Next): void => {
  try {
    const { id }: any = req.params
    const expNum: RegExp = /^[1-9-0]+$/

    if (!expNum.test(id)) {
      throw new Error('Favor pasar un id valido (númerico)')
    }

    req.body = { id: parseInt(id) }
    next()
  } catch (error: any) {
    next(helperCreateError(error, 400, error.message))
  }
}
