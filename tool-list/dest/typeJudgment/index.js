"use strict";
/**
 * @description 常用类型判断
 * @author spoony-z
 * @returns {Boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayObjMatching = exports.checkNum = exports.arrJudge = exports.characterString = void 0;
/**
 * @description 判断是否为字符串
 * @param { any } str 任意类型
 * @returns {Boolean} 是：true   否：false
 */
function characterString(str) {
    return false;
}
exports.characterString = characterString;
/**
 * 判断是否是数组
 * @param {Array} arr 数组
 * @returns {Boolean}
 */
const arrJudge = (arr) => Array.isArray(arr);
exports.arrJudge = arrJudge;
/**
 *  判断是否是数字
 * @param {Number} data
 * @returns {Boolean}
 */
const checkNum = (data) => /^\d{1,}$/g.test(String(data));
exports.checkNum = checkNum;
/**
 * 数组匹配
 * @param {Number} arrayItem 匹配的数组（字符串数组）
 * @param {Number} arrayAll 匹配的数组（数组对象）
 * @param {Number} fieldName 匹配数组中的对象的key
 * @returns {Array} 匹配到的数组
 */
const arrayObjMatching = (arrayItem, arrayAll, fieldName) => {
    if (Array.isArray(arrayItem) && arrayItem.length === 0) {
        console.error("The first parameter you passed in is empty❤️!");
        return arrayAll;
    }
    if (Array.isArray(arrayAll) && arrayAll.length === 0) {
        return arrayAll;
    }
    else if (Array.isArray(arrayAll) && arrayAll.length !== 0 && Object.prototype.toString.call(arrayAll[0]) !== '[object Object]') {
        console.error("The second parameter you passed in is not an array with an array object structure❤️!");
        return arrayAll;
    }
    else {
        const matchedItems = arrayAll.filter((item) => arrayItem.includes(item[fieldName]));
        return matchedItems;
    }
};
exports.arrayObjMatching = arrayObjMatching;
