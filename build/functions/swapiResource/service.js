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
exports.getAllResourceSWAPI = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config/config"));
const helperTransforObjectSwapi_1 = require("../../helpers/helperTransforObjectSwapi");
const getAllResourceSWAPI = (resource, queryString, query) => __awaiter(void 0, void 0, void 0, function* () {
    let format = false;
    const search = queryString === '' ? '' : `?${queryString}`;
    const { data: swapi } = yield (0, axios_1.default)(`${config_1.default.SWAPI}/${resource}/${search}`);
    if (query !== null || query.format !== undefined)
        format = true;
    if (format !== null)
        return swapi;
    const response = yield (0, helperTransforObjectSwapi_1.helperTransforObjectSwapi)(swapi);
    return response;
});
exports.getAllResourceSWAPI = getAllResourceSWAPI;
