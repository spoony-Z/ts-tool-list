/**
 * 根据 url 下载文件
 * @param url
 */
export function downLoadFile(url: string): void {
  let fileName: string = url.slice(url.lastIndexOf('/') + 1); 
  fetch(url).then((res: Response) => res.blob())
    .then((blob: Blob) => {
      const link: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    });
}

/**
 * 根据 url 获取 url 文件的后缀
 * @param url
 */
export function fileUrlType(url: string): string {
    const parts = url.split('.');
    return parts[parts.length - 1];
}

/**
 * 根据 url 获取 url 文件的后缀
 * @param {String} base64Image base64 数据
 * @param {String} FileName 图片文件名(带后缀名)
 */
import JSZip from 'jszip';
export async function convertAndRender(base64Image: string, FileName: string): Promise<Blob | undefined> {
  const base64Parts = base64Image.split(",");
  const mimeMatch = base64Parts[0].match(/:(.*?);/);
  if (mimeMatch) {
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
        type: `image/${fileUrlType(FileName) || suffix}`,
      });
      const zip = new JSZip();
      const imgName = FileName || `${Date.now()}.png`;
      zip.file(imgName, blob);
      const zipBlob = await zip.generateAsync({ type: "blob" });
      return zipBlob;
    } else {
      console.error("Invalid Base64 format");
    }
  }
  return undefined;
}

/** 
 * 将base64转为Blob
 * @param {String} base64 base64 数据
 * @param {String} FileName 图片文件名(必须带后缀名)
 * @returns {Blob} res -> Blob
 */
export function Base64Blob(base64: string, FileName: string | null): Blob | null {
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

