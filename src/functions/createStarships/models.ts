import connection, { errMySql } from '../../config/connection'
import { helperTransformResponseModel } from '../../helpers/helperTransformResponseModel'

const table = 'starships'

export const modelCreateStarShips = async (data: any): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `INSERT INTO ${table} SET ?, created_at = now()`
    connection.query(sql, data, (err: errMySql, result: any) => {
      if (err !== null) return reject(err)
      modelGetStarShip(result.insertId)
        .then(res => resolve(res))
        .catch(() => resolve({ id: result.insertId }))
    })
  })
}

export const modelGetStarShip = async (id: number): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE id = ${id}`
    connection.query(sql, (err: errMySql, result) => {
      if (err !== null) return reject(err)
      const response: any[] = helperTransformResponseModel(result)
      resolve(response[0])
    })
  })
}
