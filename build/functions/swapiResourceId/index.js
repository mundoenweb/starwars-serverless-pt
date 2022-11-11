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
exports.swapiResourceId = void 0;
const core_1 = __importDefault(require("@middy/core"));
const http_error_handler_1 = __importDefault(require("@middy/http-error-handler"));
const http_header_normalizer_1 = __importDefault(require("@middy/http-header-normalizer"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const helperResponse_1 = require("../../helpers/helperResponse");
const verifyParamId_1 = require("../../middleware/verifyParamId");
const verifyParamResource_1 = require("../../middleware/verifyParamResource");
const service_1 = require("./service");
// "queryStringParameters": null,
exports.swapiResourceId = (0, core_1.default)((event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = event.pathParameters;
        const queryString = event.rawQueryString;
        const response = yield (0, service_1.getResourceSWAPI)(params, queryString);
        return (0, helperResponse_1.helperResponse)(response);
    }
    catch (error) {
        return (0, helperResponse_1.helperResponseError)(error);
    }
}));
exports.swapiResourceId
    .use((0, http_header_normalizer_1.default)())
    .use((0, http_json_body_parser_1.default)())
    .use((0, verifyParamResource_1.verifyParamResource)())
    .use((0, verifyParamId_1.verifyParamId)())
    .use((0, http_error_handler_1.default)());
