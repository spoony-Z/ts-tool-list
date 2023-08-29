/**
 * @description 常用正则验证
 * @author spoony-z
 * @returns {Boolean}
 */

/**
 * @description 正则
 * @param idCardNumber 身份证号正则
 * @param phoneNumber 手机号正则
 * @param eMail 邮箱正则
 */
export const regular =
{
  idCardNumber: /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  phoneNumber: /^1[3-9]\d{9}$/,
  eMail: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
}

export function isString() {
  console.log("基督教的角度讲")
}
