"use strict";
/**
 * @description 时间操作
 * @author spoony-z
 * @returns {Boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCurrentTimeInRange = void 0;
/**
 * @description 判断当前时间是否在指定时间之内
 * @param { string } startTime 开始时间
 * @param { string } endTime 结束时间
 * @returns {Boolean}
 */
function isCurrentTimeInRange(startTime, endTime, specifyTime) {
    const currentDate = new Date(specifyTime ?? null);
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    return currentDate >= startDate && currentDate <= endDate;
}
exports.isCurrentTimeInRange = isCurrentTimeInRange;
