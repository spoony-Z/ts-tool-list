"use strict";
/**
 * 文件api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUrlType = exports.downLoadFile = void 0;
/**
 * 根据 url 下载文件
 * @param url
 * @param fileName
 */
function downLoadFile(url, fileName) {
    let fileNames = fileName || url.slice(url.lastIndexOf('/') + 1);
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
 */
function fileUrlType(url) {
    const parts = url.split('.');
    return parts[parts.length - 1];
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
