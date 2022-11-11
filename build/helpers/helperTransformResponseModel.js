"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperTransformResponseModel = void 0;
const helperTransformResponseModel = (arr) => {
    const newArr = [];
    for (const starship of arr) {
        const newStarship = {};
        for (const key in starship) {
            const element = starship[key];
            if (key === 'pilots' || key === 'films') {
                newStarship[key] = element.split(',');
                continue;
            }
            newStarship[key] = element;
        }
        newArr.push(newStarship);
    }
    return newArr;
};
exports.helperTransformResponseModel = helperTransformResponseModel;
