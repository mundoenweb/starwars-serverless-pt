import supertest from 'supertest'
import connection from '../../config/connection'
import { app } from '../../index'
import { starship } from './helperTest'

const api = supertest(app)
jest.setTimeout(100000)

describe('GET /starships', () => {
  test('obteniendo todas las starships', async () => {
    const { body } = await api
      .get('/starships')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    // expect('Consulta exitosaa').toContain('Consulta exitosaa')
    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo solo una starship', async () => {
    const { body } = await api
      .get('/starships/13')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    // expect('Consulta exitosaa').toContain('Consulta exitosaa')
    expect(body.message).toContain('Consulta exitosa')
  })
  test('eliminando una starship', async () => {
    const { body } = await api
      .delete('/starships/14')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Nave Estelar eliminada con exito')
  })
  test('creando una starship', async () => {
    const { body } = await api
      .delete('/starships/14')
      .send(starship)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Nave Estelar eliminada con exito')
  })
})

describe('GET /swapi/:resource', () => {
  test('obteniendo los recursos de /films', async () => {
    const { body } = await api
      .get('/swapi/films')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de /people', async () => {
    const { body } = await api
      .get('/swapi/people')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de /planets', async () => {
    const { body } = await api
      .get('/swapi/planets')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de /species', async () => {
    const { body } = await api
      .get('/swapi/species')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de /starships', async () => {
    const { body } = await api
      .get('/swapi/starships')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de /vehicles', async () => {
    const { body } = await api
      .get('/swapi/vehicles')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de people pagina 3', async () => {
    const { body } = await api
      .get('/swapi/people/?page=3')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de people y filtrando con parametro search', async () => {
    const { body } = await api
      .get('/swapi/people/?search=dart')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo los recursos de people filtrando con parametro search y formato wookiee', async () => {
    await api
      .get('/swapi/people/?format=wookiee&search=dart')
      .expect(200)
  })
})
describe('GET /swapi/:resource:id', () => {
  test('obteniendo recursos individuales de /films', async () => {
    const { body } = await api
      .get('/swapi/films')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individuales de /people', async () => {
    const { body } = await api
      .get('/swapi/people/1')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individuales de /planets', async () => {
    const { body } = await api
      .get('/swapi/planets/2')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individuales de /species', async () => {
    const { body } = await api
      .get('/swapi/species/3')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individuales de /starships', async () => {
    const { body } = await api
      .get('/swapi/starships/5')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individuales de /vehicles', async () => {
    const { body } = await api
      .get('/swapi/vehicles/6')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    expect(body.message).toContain('Consulta exitosa')
  })
  test('obteniendo recursos individual de people formato wookiee', async () => {
    const { body } = await api
      .get('/swapi/people/1/?format=wookiee')
      .expect(200)

    expect(body.message).toContain('Consulta exitosa')
  })
})

afterAll(async () => {
  connection.end()
})
