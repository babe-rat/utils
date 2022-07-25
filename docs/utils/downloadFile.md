---
title: downloadFile
group:
    title: utils
    path: /utils
---

# downloadFile

下载文件

```ts
downloadFile(data: string | ArrayBuffer | ArrayBufferView | Blob, filename: string)
```

## 参数

1. `data` Blob 对象
2. `filename` 文件名

## 示例

```ts
import axios from axios;
import { downloadFile } from '@gauss/utils'

function download(url: string, filename: string) {
    axios.get(url, {
        responseType: 'blob',
    }).then(res => {
        downloadFile(res.data, filename);
    })
}
```
