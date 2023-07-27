"use strict";
/**
 * @description 常用类型判断
 * @author spoony-z
 * @returns {Boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNum = exports.arrJudge = exports.characterString = void 0;
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
