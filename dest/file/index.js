"use strict";
/**
 * 文件api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.downLoadFile = void 0;
/**
 * 根据 url 下载文件
 * @param url
 */
function downLoadFile(url) {
    let fileName = url.slice(url.lastIndexOf('/') + 1);
    fetch(url).then((res) => res.blob())
        .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
    });
}
exports.downLoadFile = downLoadFile;
