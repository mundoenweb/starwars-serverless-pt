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
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperTransforObjectSwapi = void 0;
const helperTranstaleAzure_1 = require("./helperTranstaleAzure");
const helperGetParamsTranslate = (objectSwapi) => __awaiter(void 0, void 0, void 0, function* () {
    const keysTranslate = [];
    for (const key in objectSwapi) {
        const keyArr = key.split('_');
        if (keyArr.length > 1) {
            keysTranslate.push({ text: keyArr.join(' ') });
            continue;
        }
        keysTranslate.push({ text: key });
    }
    const translate = yield (0, helperTranstaleAzure_1.helperTranstaleAzure)(keysTranslate);
    return translate;
});
const helperTransforObjectSwapi = (swapi) => __awaiter(void 0, void 0, void 0, function* () {
    const newSwapi = {};
    let data = [];
    const dataTransform = [];
    let keysTranslate;
    if (swapi.results !== undefined) {
        newSwapi.contador = swapi.count;
        newSwapi.siguiente = swapi.next;
        newSwapi.anterior = swapi.previous;
        data = swapi.results;
        keysTranslate = yield helperGetParamsTranslate(swapi.results[0]);
    }
    else {
        keysTranslate = yield helperGetParamsTranslate(swapi);
        data = [swapi];
    }
    for (const iterator of data) {
        let count = 0;
        const newData = {};
        for (const key in iterator) {
            const element = iterator[key];
            const dataKey = keysTranslate[count].translations[0].text.split(' ').join('_');
            newData[dataKey] = element;
            count++;
        }
        dataTransform.push(newData);
    }
    if (dataTransform.length > 1) {
        newSwapi.results = dataTransform;
        return newSwapi;
    }
    return dataTransform[0];
});
exports.helperTransforObjectSwapi = helperTransforObjectSwapi;
