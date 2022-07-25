/**
 * 下载文件
 */
export type DownloadFileData = string | ArrayBuffer | ArrayBufferView | Blob

export interface DownloadFileOption {
    mime?: string
    bom?: string | Uint8Array
}

export default function downloadFile(
    data: DownloadFileData,
    filename: string,
    option?: DownloadFileOption,
) {
    const { mime, bom } = option || {}
    const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
    const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })
    const navigator = window.navigator as any
    if (navigator?.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename)
    } else {
        const blobURL = window.URL?.createObjectURL
            ? window.URL.createObjectURL(blob)
            : window.webkitURL.createObjectURL(blob)

        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = blobURL
        a.setAttribute('download', filename)
        if (typeof a.download === 'undefined') {
            a.setAttribute('target', '_blank')
        }
        document.body.appendChild(a)
        a.click()

        setTimeout(() => {
            document.body.removeChild(a)
            window.URL?.revokeObjectURL
                ? window.URL.revokeObjectURL(blobURL)
                : window.webkitURL.revokeObjectURL(blobURL)
        }, 200)
    }
}
