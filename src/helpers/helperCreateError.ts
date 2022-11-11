import createHttpError from 'http-errors'

type N = number

export const helperCreateError = (error: any, status?: N, message?: any): any => {
  const { code, name, response }: any = error

  if (name === 'TypeError') {
    console.log(error)
    return createHttpError.InternalServerError(error.message)
  }

  if (code === 'ENOTFOUND') {
    const message = 'Error al conectarse con el servicio solicitado'
    return createHttpError.InternalServerError(message)
  }

  if (name === 'AxiosError') {
    const typeData = typeof response.data
    if (typeData === undefined || typeData === 'string') {
      return createHttpError(response.status)
    }
    return createHttpError(response.status, response.data)
  }

  if (status !== undefined && message === undefined) {
    return createHttpError(status, error)
  }

  if (status !== undefined && message !== undefined) {
    return createHttpError(status, { ...error, message })
  }

  return createHttpError(500, error)
}
