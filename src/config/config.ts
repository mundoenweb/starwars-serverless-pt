import { config as configDotenv } from 'dotenv'
configDotenv()

const config = {
  mysqlDB: {
    host: process.env.HOST,
    port: process.env.PUERTODB,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE
  },
  SWAPI: process.env.SWAPI
}

export default config
