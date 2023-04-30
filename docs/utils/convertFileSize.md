---
title: convertFileSize
group:
    title: utils
    path: /utils
---

# convertFileSize

转换文件大小

```ts
convertFileSize(size: number, units: string[]);
```

## 参数

1. `size` 文件大小，必选值
2. `units` 单位数组，可选值，默认值为 ['B', 'KB', 'MB', 'GB', 'TB']

## 例子

```ts
import { convertFileSize } from '@baberat/utils'

convertFileSize(1000) // => { size: 1000, unit: 'B' }
convertFileSize(1024) // => { size: 1, unit: 'KB' }
convertFileSize(1024 * 1024) // => { size: 1, unit: 'MB' }
convertFileSize(1024 * 1024 * 1000) // => { size: 1000, unit: 'MB' }
convertFileSize(1024 * 1024 * 1024) // => { size: 1, unit: 'GB' }
convertFileSize(1024 * 1024 * 1024 * 1024) // => { size: 1, unit: 'TB' }

const units = ['B', 'K', 'M', 'G', 'T']
convertFileSize(1024, units) // => { size: 1, unit: 'K' }
convertFileSize(1024 * 1024, units) // => { size: 1, unit: 'M' }
```
