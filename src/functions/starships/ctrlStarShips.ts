/* eslint-disable n/no-deprecated-api */
import {
  Response as Res,
  Request as Req,
  NextFunction
} from 'express'
import { helperResponse } from '../../utils/helperResponse'
import * as models from './modelsStarShips'

const createStarShips = async (req: Req, res: Res, next: NextFunction): Promise<void> => {
  try {
    const data = req.body
    const response = await models.modelCreateStarShips(data)
    helperResponse(res, response, 200, 'Nave stelar creada con exito')
  } catch (error: any) {
    next(error)
  }
}

const getStarShips = async (_req: Req, res: Res, next: NextFunction): Promise<void> => {
  try {
    const response = await models.modelgetStarShips()
    helperResponse(res, response, 200, 'Consulta exitosa')
  } catch (error: any) {
    next(error)
  }
}
const getStarShip = async (req: Req, res: Res, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.body
    const response = await models.modelGetStarShip(id)
    helperResponse(res, response, 200, 'Consulta exitosa')
  } catch (error: any) {
    next(error)
  }
}
const deleteStarShip = async (req: Req, res: Res, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.body
    await models.modelDeletStarShip(id)
    helperResponse(res, [], 200, 'Nave Estelar eliminada con exito')
  } catch (error: any) {
    next(error)
  }
}

export {
  createStarShips,
  getStarShips,
  getStarShip,
  deleteStarShip
}
