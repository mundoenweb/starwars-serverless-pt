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
exports.modelGetStarShip = void 0;
const connection_1 = __importDefault(require("../../config/connection"));
const helperTransformResponseModel_1 = require("../../helpers/helperTransformResponseModel");
const table = 'starships';
const modelGetStarShip = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
        connection_1.default.query(sql, (err, result) => {
            if (err !== null)
                return reject(err);
            const response = (0, helperTransformResponseModel_1.helperTransformResponseModel)(result);
            resolve(response[0]);
        });
    });
});
exports.modelGetStarShip = modelGetStarShip;
