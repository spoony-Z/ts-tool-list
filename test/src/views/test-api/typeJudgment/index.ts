/**
 * @description 常用类型判断
 * @author spoony-z
 * @returns {Boolean}
 */

/**
 * 判断是否是数组
 * @param {Array} arr 数组
 * @returns {Boolean}
 */
export const arrJudge = (arr: any[]): boolean => Array.isArray(arr)

/**
 *  判断是否是数字
 * @param {Number} data
 * @returns {Boolean}
 */
export const checkNum = (data: string | number): boolean => /^\d{1,}$/g.test(String(data))