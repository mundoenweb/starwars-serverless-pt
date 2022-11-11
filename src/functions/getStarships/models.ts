import connection, { errMySql } from '../../config/connection'
import { helperTransformResponseModel } from '../../helpers/helperTransformResponseModel'

const table = 'starships'

export const modelgetStarShips = async (): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `SELECT * FROM ${table}`
    connection.query(sql, (err: errMySql, result) => {
      if (err !== null) reject(err)
      const response: any[] = helperTransformResponseModel(result)
      resolve(response)
    })
  })
}
