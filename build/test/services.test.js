"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../config/connection"));
const service_1 = require("../functions/createStarships/service");
const service_2 = require("../functions/getStarships/service");
const service_3 = require("../functions/getStarship/service");
const service_4 = require("../functions/deleteStarship/service");
const service_5 = require("../functions/swapiResource/service");
const service_6 = require("../functions/swapiResourceId/service");
jest.setTimeout(100000);
const navestelar = {
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
};
describe('rutas crud para starships', () => {
    describe('GET: /starships/createStarships', () => {
        test('probando crear una starship con datos valido', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_1.serviceCreateStarships)(navestelar);
            expect(navestelar.name).toBe(data.name);
        }));
    });
    describe('GET: /starships', () => {
        test('obtien todos las starships', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_2.serviceGetStarShips)();
            const length = data.length > 0;
            expect(true).toBe(length);
        }));
    });
    describe('GET: /starships/id', () => {
        test('obtien solo una starship', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_3.serviceGetStarship)(25);
            const response = data.name !== undefined;
            expect(true).toBe(response);
        }));
    });
    describe('DELETE: /starships/id', () => {
        test('eliminar una starships', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_4.serviceDeleteStarship)(26);
            expect(true).toBe(data);
        }));
    });
});
describe('rutas de /swapi', () => {
    describe('GET: /swapi', () => {
        test('obtener todas las people', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_5.getAllResourceSWAPI)('people', '', null);
            expect(data.results[0].nombre).toBe('Luke Skywalker');
        }));
        test('obtener todas las people ?page=3', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_5.getAllResourceSWAPI)('people', 'page=3', null);
            expect(data.results[0].nombre).toBe('Boba Fett');
        }));
        test('obtener las /people con el parametro search', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, service_5.getAllResourceSWAPI)('people', 'search=dar', null);
            expect(data.results[0].nombre).toBe('Darth Vader');
        }));
    });
    describe('GET: /swapi/:id', () => {
        test('obtener una people', () => __awaiter(void 0, void 0, void 0, function* () {
            const params = { resource: 'people', id: 1 };
            const data = yield (0, service_6.getResourceSWAPI)(params, '');
            expect(data.nombre).toBe('Luke Skywalker');
        }));
        test('obtener una people con formato wookiee', () => __awaiter(void 0, void 0, void 0, function* () {
            const params = { resource: 'people', id: 1 };
            const data = yield (0, service_6.getResourceSWAPI)(params, 'format=wookiee');
            expect(data.whrascwo).toBe('Lhuorwo Sorroohraanorworc');
        }));
    });
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    connection_1.default.end();
}));
