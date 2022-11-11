/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable n/no-deprecated-api */
import {
  Response as Res,
  Request as Req,
  NextFunction as Next
} from 'express'
import axios from 'axios'
import config from '../../config/config'
import { helperTransforObjectSwapi } from './utils/helperTransforObjectSwapi'
import { helperResponse } from '../../utils/helperResponse'
import url from 'url'

const getAllResourceSWAPI = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { resource } = req.params
    const { format } = req.query
    const urlParse = url.parse(req.url)
    const search = urlParse.search === null ? '' : urlParse.search

    const { data: swapi }: any = await axios(`${config.SWAPI}/${resource}/${search}`)

    if (format !== undefined) {
      res.send(swapi).status(200)
      return
    }

    const response = await helperTransforObjectSwapi(swapi)
    helperResponse(res, response, 200, 'Consulta exitosa')
  } catch (error: any) {
    next(error)
  }
}

const getResourceSWAPI = async (req: Req, res: Res, next: Next): Promise<void> => {
  try {
    const { resource, id } = req.params
    const urlParse = url.parse(req.url)
    const search = urlParse.search === null ? '' : urlParse.search

    const { data: swapi }: any = await axios(`${config.SWAPI}/${resource}/${id}/${search}`)
    const response = await helperTransforObjectSwapi(swapi)

    helperResponse(res, response, 200, 'Consulta exitosa')
  } catch (error: any) {
    next(error)
  }
}

export {
  getAllResourceSWAPI,
  getResourceSWAPI
}
