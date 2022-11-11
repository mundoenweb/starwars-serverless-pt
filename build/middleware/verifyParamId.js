"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyParamId = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const verifyParamId = () => {
    const MiddlewareBefore = (request) => {
        const message = JSON.stringify({ message: 'Favor pasar un id valido (númerico)' });
        const { event } = request;
        const { id } = event.pathParameters;
        const expNum = /^[1-9-0]+$/;
        if (!expNum.test(id)) {
            throw http_errors_1.default.BadRequest(message);
        }
        event.pathParameters = Object.assign(Object.assign({}, event.pathParameters), { id: parseInt(id) });
    };
    return {
        before: MiddlewareBefore
    };
};
exports.verifyParamId = verifyParamId;
