"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFilms = exports.parsePilots = exports.parseFieldNumber = exports.parseFieldNumberInteger = exports.parseFieldStrings = void 0;
const isString = (str) => {
    return typeof str === 'string';
};
const isInteger = (num) => {
    const expNum = /^[1-9-0]+$/;
    return expNum.test(num);
};
const isNumber = (num) => {
    const expNum = /^[1-9-0,.]+$/;
    return expNum.test(num);
};
const parseFieldStrings = (text, nameField) => {
    if (!isString(text)) {
        throw new Error(`El campo ${nameField} es incorrecto o no existe`);
    }
    return text.trim();
};
exports.parseFieldStrings = parseFieldStrings;
const parseFieldNumberInteger = (numText, nameField) => {
    if (!isInteger(numText)) {
        throw new Error(`El campo ${nameField} es incorrecto o no existe`);
    }
    return numText.trim();
};
exports.parseFieldNumberInteger = parseFieldNumberInteger;
const parseFieldNumber = (numText, nameField) => {
    if (!isNumber(numText)) {
        throw new Error(`El campo ${nameField} es incorrecto o no existe, error: (${numText})`);
    }
    return numText.trim();
};
exports.parseFieldNumber = parseFieldNumber;
const parsePilots = (arrPilots, nameField) => {
    let pilots = '';
    if (arrPilots === undefined || arrPilots.length === 0) {
        throw new Error(`El campo ${nameField} debe se un array con almenos un piloto`);
    }
    for (const pilot of arrPilots) {
        if (!isString(pilot)) {
            throw new Error('El nombre del piloto solo puede ser texto');
        }
        pilots += pilot;
    }
    return pilots;
};
exports.parsePilots = parsePilots;
const parseFilms = (arrFilms, nameField) => {
    let films = '';
    if (arrFilms === undefined || arrFilms.length === 0) {
        throw new Error(`El campo ${nameField} debe se un array con almenos una pelcula`);
    }
    for (const film of arrFilms) {
        if (!isString(film)) {
            throw new Error('El nombre de la nave solo puede ser texto');
        }
        films += film;
    }
    return films;
};
exports.parseFilms = parseFilms;
