/** 文件api */
/**
 * 根据 url 下载文件
 * @param url
 * @param fileName 下载的文件名
 * @param determine  确定是合法的后缀(为 true 时会关闭后缀错误提示)
 */
export declare function downLoadFile(url: string, fileName: string | null, determine: boolean | null): void;
/**
 * 根据 url 获取 url 文件的后缀
 * @param url
 * @param determine  确定是合法的后缀(为 true 时会关闭后缀错误提示)
 */
export declare function fileUrlType(url: string, determine: boolean): string | boolean;
/**
 * 传入base64 将base64转为Blob，输出压缩包
 * @param {String} base64Image base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Promise} res -> 压缩包的 Blob
 */
/**
 * 将base64转为Blob
 * @param {String} base64 base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Blob} res -> Blob
 */
export declare function Base64Blob(base64: string): Blob | null;
/**
 * 将 url 转换为 file 对象
 * @param url
 * @param fileName
 * @returns
 */
export declare function urlToFile(url: string, fileName: string): Promise<File | null>;
/**
 * 通过文件 URL 获取文件名
 * @param url
 * @returns
 */
export declare function getFileNameFromUrl(url: string): string | null;
/**
 * 将 URL 转为 Blob
 * @param url
 * @returns
 */
export declare function urlToBlob(url: string, type: string | null): Promise<Blob | null>;
