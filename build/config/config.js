"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    mysqlDB: {
        host: process.env.HOST,
        port: process.env.PUERTODB,
        user: process.env.USER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE
    },
    SWAPI: process.env.SWAPI
};
exports.default = config;
