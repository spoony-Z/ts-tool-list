"use strict";
/**
 * @description 常用方法
 * @author spoony-z
 * @returns {Boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentIdAll = exports.getNode = exports.getPromises = void 0;
/**
 * @description 判断是否为图片路径
 * @param {String} url 路径
 * @returns {Boolean}
 */
function getPromises(url) {
    let img = document.createElement("img");
    img.src = url;
    return new Promise(function (resolve, reject) {
        img.onerror = () => {
            resolve(false);
        };
        img.onload = () => {
            resolve(true);
        };
    });
}
exports.getPromises = getPromises;
/**
 * @description 递归数组返回想要的值，返回所有匹配到的节点组成的数组
 * @param {Array}           list        要递归的数组
 * @param {String}          childKey    子集字段
 * @param {String}          key         要匹配的字段（===判断）
 * @param {String/Number}   val         要匹配字段所对应的值（===判断）
 * @returns {Array} 返回所有匹配到的数据
 */
function getNode(list, childKey, key, val, result = []) {
    list.forEach((item) => {
        if (item[key] === val) {
            result.push(item);
        }
        if (item[childKey] && item[childKey].length > 0) {
            getNode(item[childKey], childKey, key, val, result);
        }
    });
    return result;
}
exports.getNode = getNode;
/**
 * @description 递归数组，返回所有匹配到的父级数据
 * @param {Array} list 要递归的数组
 * @param {String} id 子集字段值
 * @param {String} fieldName 子集字段名
 * @param {String} children 子集
 * @returns {Array} 返回所有匹配到的数据
 */
function getParentIdAll(list, fieldName, id, children) {
    for (let i in list) {
        if (list[i][fieldName] === id) {
            return [list[i]];
        }
        if (list[i][children]) {
            let node = getParentIdAll(list[i][children], fieldName, id, children);
            if (node !== undefined) {
                const retArr = node.concat(list[i]);
                return retArr;
            }
        }
    }
    return undefined;
}
exports.getParentIdAll = getParentIdAll;
