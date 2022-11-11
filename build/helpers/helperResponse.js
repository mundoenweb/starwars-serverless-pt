"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperResponseError = exports.helperResponse = void 0;
const helperCreateError_1 = require("./helperCreateError");
const msgCode = {
    200: 'Consulta exitosa',
    201: 'Registro exitoso'
};
const helperResponse = (data, status = 200, message) => {
    const msg = message === undefined ? msgCode[status] : message;
    const body = { status, data, msg };
    return {
        headers: { 'Content-Type': 'application/json' },
        statusCode: status,
        body: JSON.stringify(body)
    };
};
exports.helperResponse = helperResponse;
const helperResponseError = (error) => {
    const body = (0, helperCreateError_1.helperCreateError)(error);
    return {
        statusCode: body.status,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    };
};
exports.helperResponseError = helperResponseError;
