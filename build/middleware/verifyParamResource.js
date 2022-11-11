"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyParamResource = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const verifyParamResource = () => {
    const MiddlewareBefore = (request) => {
        const resourceValid = ['films', 'people', 'planets', 'species', 'starships', 'vehicle'];
        const message = JSON.stringify({ message: `Favor pasar un id valido como: ${resourceValid.join(' ')}` });
        const { event } = request;
        const { resource } = event.pathParameters;
        if (!resourceValid.includes(resource)) {
            throw http_errors_1.default.BadRequest(message);
        }
    };
    return {
        before: MiddlewareBefore
    };
};
exports.verifyParamResource = verifyParamResource;
