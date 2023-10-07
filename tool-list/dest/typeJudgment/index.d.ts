/**
 * @description 常用类型判断
 * @author spoony-z
 * @returns {Boolean}
 */
/**
 * @description 判断是否为字符串
 * @param { any } str 任意类型
 * @returns {Boolean} 是：true   否：false
 */
export declare function characterString(str: any): boolean;
/**
 * 判断是否是数组
 * @param {Array} arr 数组
 * @returns {Boolean}
 */
export declare const arrJudge: (arr: any[]) => boolean;
/**
 *  判断是否是数字
 * @param {Number} data
 * @returns {Boolean}
 */
export declare const checkNum: (data: string | number) => boolean;
/**
 * 数组匹配
 * @param {Number} arrayItem 匹配的数组（字符串数组）
 * @param {Number} arrayAll 匹配的数组（数组对象）
 * @param {Number} fieldName 匹配数组中的对象的key
 * @returns {Array} 匹配到的数组
 */
export declare const arrayObjMatching: <T>(arrayItem: string[], arrayAll: T[], fieldName: keyof T) => T[];
