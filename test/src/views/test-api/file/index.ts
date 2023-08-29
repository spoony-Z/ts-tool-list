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