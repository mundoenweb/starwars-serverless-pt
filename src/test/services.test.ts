import connection from '../config/connection'
import { serviceCreateStarships } from '../functions/createStarships/service'
import { serviceGetStarShips } from '../functions/getStarships/service'
import { serviceGetStarship } from '../functions/getStarship/service'
import { serviceDeleteStarship } from '../functions/deleteStarship/service'
import { getAllResourceSWAPI } from '../functions/swapiResource/service'
import { getResourceSWAPI } from '../functions/swapiResourceId/service'

jest.setTimeout(100000)

const navestelar: any = {
  name: 'Sentinel landing craft _ 705',
  model: 'Sentinel-class landing craft',
  manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
  cost_in_credits: '240000',
  length: '38',
  max_atmosphering_speed: '1000',
  crew: '5',
  passengers: '75',
  cargo_capacity: '180000',
  consumables: '1 month',
  hyperdrive_rating: '1.0',
  MGLT: '70',
  starship_class: 'landing craft',
  pilots: ['rommer'],
  films: ['un nuevo tiempo']
}

describe('rutas crud para starships', () => {
  describe('GET: /starships/createStarships', () => {
    test('probando crear una starship con datos valido', async () => {
      const data: any = await serviceCreateStarships(navestelar)
      expect(navestelar.name).toBe(data.name)
    })
  })
  describe('GET: /starships', () => {
    test('obtien todos las starships', async () => {
      const data: any[] = await serviceGetStarShips()
      const length = data.length > 0
      expect(true).toBe(length)
    })
  })
  describe('GET: /starships/id', () => {
    test('obtien solo una starship', async () => {
      const data: any = await serviceGetStarship(25)
      const response = data.name !== undefined
      expect(true).toBe(response)
    })
  })
  describe('DELETE: /starships/id', () => {
    test('eliminar una starships', async () => {
      const data: any = await serviceDeleteStarship(26)
      expect(true).toBe(data)
    })
  })
})

describe('rutas de /swapi', () => {
  describe('GET: /swapi', () => {
    test('obtener todas las people', async () => {
      const data: any = await getAllResourceSWAPI('people', '', null)
      expect(data.results[0].nombre).toBe('Luke Skywalker')
    })
    test('obtener todas las people ?page=3', async () => {
      const data: any = await getAllResourceSWAPI('people', 'page=3', null)
      expect(data.results[0].nombre).toBe('Boba Fett')
    })
    test('obtener las /people con el parametro search', async () => {
      const data: any = await getAllResourceSWAPI('people', 'search=dar', null)
      expect(data.results[0].nombre).toBe('Darth Vader')
    })
  })

  describe('GET: /swapi/:id', () => {
    test('obtener una people', async () => {
      const params = { resource: 'people', id: 1 }
      const data: any = await getResourceSWAPI(params, '')
      expect(data.nombre).toBe('Luke Skywalker')
    })
    test('obtener una people con formato wookiee', async () => {
      const params = { resource: 'people', id: 1 }
      const data: any = await getResourceSWAPI(params, 'format=wookiee')
      expect(data.whrascwo).toBe('Lhuorwo Sorroohraanorworc')
    })
  })
})
afterAll(async () => {
  connection.end()
})
