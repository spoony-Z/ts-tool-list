/**
 * 文件api
 */
/**
 * 根据 url 下载文件
 * @param url
 */
export declare function downLoadFile(url: string, fileName: string): void;
/**
 * 根据 url 获取 url 文件的后缀
 * @param url
 */
export declare function fileUrlType(url: string): string;
/**
 * 传入base64 将base64转为Blob，输出压缩包
 * @param {String} base64Image base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Promise} res -> 压缩包的 Blob
 */
