import connection, { errMySql } from '../../config/connection'

const table = 'starships'

export const modelDeletStarShip = async (id: number): Promise<boolean> => {
  return await new Promise<boolean>((resolve, reject) => {
    const sql = `DELETE FROM ${table} WHERE id=${id}`
    connection.query(sql, (err: errMySql, _result) => {
      if (err !== null) return reject(err)
      resolve(true)
    })
  })
}
