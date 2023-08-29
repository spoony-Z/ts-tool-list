/**
 * @description 获取年月日时分秒 兼容ts 避免在js项目中导入提示
 * @author spoony-z
 * @param? 时间
 * @returns yyyy-mm-dd hh:mm:ss
 */
export declare function getYMDHMS(
  date?: number | string,
  connector?: string
): string;