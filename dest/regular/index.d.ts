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
export declare const regular: {
    idCardNumber: RegExp;
    phoneNumber: RegExp;
    eMail: RegExp;
};
export declare function isString(): void;
