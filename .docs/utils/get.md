---
realPath: docs/utils/get.md
---
# get

获取对象属性值

```ts
get(object: Record<string, any>, path: string);
```

## 参数

1. `object` 对象
2. `path` 属性值路径

## 例子

```ts
import { get } from '@baberat/utils'

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: '3',
        },
    },
}

get(obj, 'a') // => 1
get(obj, 'b.c') // => 2
get(obj, 'b.d.e') // => 3
get(obj, 'b.d') // => {e: '3'}
```
