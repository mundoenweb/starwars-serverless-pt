"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const mysql2_1 = __importDefault(require("mysql2"));
const { mysqlDB } = config_1.default;
const connection = mysql2_1.default.createConnection(mysqlDB);
connection.connect((err) => {
    if (err !== null) {
        console.log(err);
        console.log('ocurrio un error al conectarse con mysql');
        return;
    }
    console.log('conexion exitosa a mysql');
});
exports.default = connection;
