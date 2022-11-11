"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDataCreate = void 0;
const parse = __importStar(require("./helper/helperValidatingCardFieldsAndParseData"));
const http_errors_1 = __importDefault(require("http-errors"));
const verifyDataCreate = () => {
    const MiddlewareBefore = (request) => {
        const { event } = request;
        const data = event.body;
        try {
            if (data === null || data === undefined) {
                throw new Error('Debe enviar todos los datos');
            }
            const card = {
                name: parse.parseFieldStrings(data.name, 'name'),
                model: parse.parseFieldStrings(data.model, 'model'),
                manufacturer: parse.parseFieldStrings(data.manufacturer, 'manufacturer'),
                cost_in_credits: parse.parseFieldNumberInteger(data.cost_in_credits, 'cost_in_credits'),
                length: parse.parseFieldNumberInteger(data.length, 'length'),
                max_atmosphering_speed: parse.parseFieldNumberInteger(data.max_atmosphering_speed, 'max_atmosphering_speed'),
                crew: parse.parseFieldNumberInteger(data.crew, 'crew'),
                passengers: parse.parseFieldNumberInteger(data.passengers, 'passengers'),
                cargo_capacity: parse.parseFieldNumberInteger(data.cargo_capacity, 'cargo_capacity'),
                consumables: parse.parseFieldStrings(data.consumables, 'consumables'),
                hyperdrive_rating: parse.parseFieldNumber(data.hyperdrive_rating, 'hyperdrive_rating'),
                MGLT: parse.parseFieldNumberInteger(data.MGLT, 'MGLT'),
                starship_class: parse.parseFieldStrings(data.name, 'starship_class'),
                pilots: parse.parsePilots(data.pilots, 'pilots'),
                films: parse.parseFilms(data.films, 'films')
            };
            request.event = card;
        }
        catch (error) {
            throw (0, http_errors_1.default)(400, JSON.stringify({ message: error.message }));
        }
    };
    return {
        before: MiddlewareBefore
    };
};
exports.verifyDataCreate = verifyDataCreate;
