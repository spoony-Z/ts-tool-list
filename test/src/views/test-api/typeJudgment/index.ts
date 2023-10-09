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

/**
 * 数组匹配
 * @param {Number} arrayItem 匹配的数组（字符串数组）
 * @param {Number} arrayAll 匹配的数组（数组对象）
 * @param {Number} fieldName 匹配数组中的对象的key
 * @returns {Array} 匹配到的数组
 */
export const arrayObjMatching = <T>(arrayItem: string[], arrayAll: T[], fieldName: keyof T): T[] => {
  if(Array.isArray(arrayItem) && arrayItem.length ===0) {
    console.error("The first parameter you passed in is empty❤️!")
    return arrayAll
  }
  if(Array.isArray(arrayAll) && arrayAll.length === 0){
    return arrayAll
  }else if(Array.isArray(arrayAll) && arrayAll.length !== 0 && Object.prototype.toString.call(arrayAll[0]) !== '[object Object]'){
    console.error("The second parameter you passed in is not an array with an array object structure❤️!")
    return arrayAll
  }else {
    const matchedItems = arrayAll.filter((item) =>
      arrayItem.includes(item[fieldName] as any)
    );
    return matchedItems;
  }
};