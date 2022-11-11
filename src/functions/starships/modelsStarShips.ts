import connection, { errMySql } from '../../config/connection'
import { helperTransformResponseModel } from './helper/helperTransformResponseModel'

const table = 'starships'

const modelCreateStarShips = async (data: any): Promise<any> => {
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
const modelgetStarShips = async (): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `SELECT * FROM ${table}`
    connection.query(sql, (err: errMySql, result) => {
      if (err !== null) reject(err)
      const response: any[] = helperTransformResponseModel(result)
      resolve(response)
    })
  })
}
const modelGetStarShip = async (id: number): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE id = ${id}`
    connection.query(sql, (err: errMySql, result) => {
      if (err !== null) return reject(err)
      const response: any[] = helperTransformResponseModel(result)
      resolve(response[0])
    })
  })
}
const modelDeletStarShip = async (id: number): Promise<void> => {
  return await new Promise<void>((resolve, reject) => {
    const sql = `DELETE FROM ${table} WHERE id=${id}`
    connection.query(sql, (err: errMySql, _result) => {
      if (err !== null) return reject(err)
      resolve()
    })
  })
}

export {
  modelCreateStarShips,
  modelgetStarShips,
  modelGetStarShip,
  modelDeletStarShip
}
