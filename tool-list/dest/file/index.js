"use strict";
/**
 * 文件api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Blob = exports.fileUrlType = exports.downLoadFile = void 0;
/**
 * 根据 url 下载文件
 * @param url
 * @param fileName 下载的文件名
 * @param determine  确定是合法的后缀(为 true 时会关闭后缀错误提示)
 */
function downLoadFile(url, fileName, determine) {
    let fileNames;
    /** fileName 后缀 */
    if (fileName) {
        const suffixName = fileUrlType(fileName || "", determine || false);
        const suffixUrl = fileUrlType(url || "", determine || false);
        /** 有后缀*/
        if (suffixName) {
            fileNames = fileName;
        }
        else if (suffixUrl) {
            /**否则使用 url 后缀 */
            fileNames = `${fileName}.${suffixUrl}`;
        }
        else {
            /** 如果都没有后缀 或 不合法 */
            console.error("❤️‍🔥Please check if your link or file name is a valid suffix. If so, please set the third parameter in the downLoadFile function to true!");
        }
    }
    else {
        /** url 后缀 */
        const suffixUrl = fileUrlType(url || "", determine || false);
        if (suffixUrl) {
            fileNames = url.slice(url.lastIndexOf('/') + 1);
        }
        else {
            console.error("❤️‍🔥Please check if your link or file name is a valid suffix. If so, please set the third parameter in the downLoadFile function to true!");
        }
    }
    fetch(url).then((res) => res.blob())
        .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileNames;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
    });
}
exports.downLoadFile = downLoadFile;
/**
 * 根据 url 获取 url 文件的后缀
 * @param url
 * @param determine  确定是合法的后缀(为 true 时会关闭后缀错误提示)
 */
function fileUrlType(url, determine) {
    const fileName = url.split('/').pop();
    const fileExtension = fileName.split('.').pop();
    const validExtensions = [
        // 文本
        'java',
        'xml',
        'json',
        'conf',
        'jsp',
        'phps',
        'asp',
        'project',
        'classpath',
        'svn',
        'gitignore',
        'log',
        'sys',
        'ini',
        'txt',
        // 文档
        'pdf',
        'xls',
        'xlsx',
        'xlsm',
        'xlsb',
        'xltx',
        "doc",
        "docm",
        'docx',
        'ppt',
        // 可执行文件
        'exe',
        'msi',
        'bat',
        'sh',
        'rpm',
        'deb',
        'bin',
        'dmg',
        'pkg',
        // 编译后文件
        'class',
        'dll',
        'so',
        'a',
        'ko',
        // 压缩包
        'rar',
        'zip',
        'arj',
        'gz',
        'tar',
        'tar.gz',
        '7z',
        // 网页
        'htm',
        'html',
        'js',
        'css',
        // 镜像
        'iso',
        'mdf',
        // 图片
        'bmp',
        'gif',
        'jpg',
        'png',
        'tif',
        'swf',
        // 音频
        'mid',
        'wav',
        'mp3',
        'wma',
        // 视频
        'rm',
        'rmvb',
        'mpg',
        'mpeg',
        'avi',
        'mov',
        'wmv',
        // 其他
        'asf',
        'tmp',
    ];
    // 检查文件后缀是否在合法后缀列表中
    if (determine) {
        const parts = url.split('.');
        return parts[parts.length - 1];
    }
    else {
        if (validExtensions.includes(fileExtension.toLowerCase())) {
            const parts = url.split('.');
            return parts[parts.length - 1];
        }
        else {
            console.warn("💥Please check if your file URL or file suffix is correct! If this prompt is turned off, set the second parameter of the fileUrlType function you are using to true or the third parameter of the downloadFile function to true！");
            return false;
        }
    }
}
exports.fileUrlType = fileUrlType;
/**
 * 传入base64 将base64转为Blob，输出压缩包
 * @param {String} base64Image base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Promise} res -> 压缩包的 Blob
 */
// import JSZip from 'jszip';
// export async function convertAndRender(base64Image: string, FileName: string): Promise<Blob | undefined> {
//   const base64Parts = base64Image.split(",");
//   const mimeMatch = base64Parts[0].match(/:(.*?);/);
//   if (mimeMatch) {
//     const mime = mimeMatch[1];
//     const suffix = mime.split("/")[1];
//     if (base64Parts.length === 2) {
//       const base64String = base64Parts[1];
//       const byteCharacters = atob(base64String);
//       const byteArrays = new Uint8Array(byteCharacters.length);
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteArrays[i] = byteCharacters.charCodeAt(i);
//       }
//       const blob = new Blob([byteArrays], {
//         type: `image/${fileUrlType(FileName) || suffix}`,
//       });
//       const zip = new JSZip();
//       const imgName = FileName || `${Date.now()}.png`;
//       zip.file(imgName, blob);
//       const zipBlob = await zip.generateAsync({ type: "blob" });
//       return zipBlob;
//     } else {
//       console.error("Invalid Base64 format");
//     }
//   }
//   return undefined;
// }
/**
 * 将base64转为Blob
 * @param {String} base64 base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Blob} res -> Blob
 */
function Base64Blob(base64) {
    const base64Parts = base64.split(",");
    const mimeMatch = base64Parts[0].match(/:(.*?);/);
    if (mimeMatch && mimeMatch.length >= 2) {
        const mime = mimeMatch[1];
        const suffix = mime.split("/")[1];
        if (base64Parts.length === 2) {
            const base64String = base64Parts[1];
            const byteCharacters = atob(base64String);
            const byteArrays = new Uint8Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteArrays[i] = byteCharacters.charCodeAt(i);
            }
            const blob = new Blob([byteArrays], {
                type: `image/${suffix}`,
            });
            return blob;
        }
    }
    console.error("Invalid Base64 format");
    return null;
}
exports.Base64Blob = Base64Blob;
