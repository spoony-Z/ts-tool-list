/**
 * @description 时间操作
 * @author spoony-z
 * @returns {Boolean}
 */


/**
 * @description 判断当前时间是否在指定时间之内
 * @param { string } startTime 开始时间
 * @param { string } endTime 结束时间
 * @param { string } specifyTime 指定时间（若不传指定时间会将当前时间作为指定时间）
 * @returns {Boolean}
 */
export function isCurrentTimeInRange(startTime: string, endTime: string, specifyTime: string | null): boolean {
  const currentDate = specifyTime ? new Date(specifyTime) : new Date();
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  return currentDate >= startDate && currentDate <= endDate;
}


/**
 * @description 判断当前时间是否在指定时间之内
 * @param { string } str 开始时间
 * @returns {Boolean}
 */
export function isDateTimeString(str: string) {
  // 使用正则表达式匹配日期时间格式 "YYYY-MM-DD HH:MM:SS"
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return dateTimeRegex.test(str);
}
// 示例用法：
console.log(isDateTimeString("2023-09-25 12:30:45")); // true
console.log(isDateTimeString("2023-09-25 08:15:00")); // true
console.log(isDateTimeString("2023/09/25 12:30:45")); // false
console.log(isDateTimeString("09-25-2023 12:30:45")); // false






