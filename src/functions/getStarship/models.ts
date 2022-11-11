import connection, { errMySql } from '../../config/connection'
import { helperTransformResponseModel } from '../../helpers/helperTransformResponseModel'

const table = 'starships'

export const modelGetStarShip = async (id: number): Promise<{}> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE id = ${id}`
    connection.query(sql, (err: errMySql, result) => {
      if (err !== null) return reject(err)
      const response: any[] = helperTransformResponseModel(result)
      resolve(response[0])
    })
  })
}
