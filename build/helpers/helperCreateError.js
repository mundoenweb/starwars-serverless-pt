"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperCreateError = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const helperCreateError = (error, status, message) => {
    const { code, name, response } = error;
    if (name === 'TypeError') {
        console.log(error);
        return http_errors_1.default.InternalServerError(error.message);
    }
    if (code === 'ENOTFOUND') {
        const message = 'Error al conectarse con el servicio solicitado';
        return http_errors_1.default.InternalServerError(message);
    }
    if (name === 'AxiosError') {
        const typeData = typeof response.data;
        if (typeData === undefined || typeData === 'string') {
            return (0, http_errors_1.default)(response.status);
        }
        return (0, http_errors_1.default)(response.status, response.data);
    }
    if (status !== undefined && message === undefined) {
        return (0, http_errors_1.default)(status, error);
    }
    if (status !== undefined && message !== undefined) {
        return (0, http_errors_1.default)(status, Object.assign(Object.assign({}, error), { message }));
    }
    return (0, http_errors_1.default)(500, error);
};
exports.helperCreateError = helperCreateError;
