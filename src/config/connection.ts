import config from './config'
import mysql from 'mysql2'

export type errMySql = mysql.QueryError | null

const { mysqlDB } = config

const connection: mysql.Connection = mysql.createConnection(mysqlDB)

connection.connect((err: errMySql): any => {
  if (err !== null) {
    console.log(err)
    console.log('ocurrio un error al conectarse con mysql')
    return
  }
  console.log('conexion exitosa a mysql')
})

export default connection
