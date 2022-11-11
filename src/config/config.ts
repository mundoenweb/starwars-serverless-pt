
const config = {
  mysqlDB: {
    host: process.env.HOST as string,
    port: process.env.PUERTODB as any,
    user: process.env.USER as string,
    password: process.env.DBPASSWORD as string,
    database: process.env.DATABASE as string
  },
  SWAPI: process.env.SWAPI as string
}

export default config
