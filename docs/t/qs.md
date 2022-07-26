---
title: qs
group:
    title: t
    path: /t
    order: 4
---

# qs

字符串解析器，[详见](https://www.npmjs.com/package/qs)

```ts
import { qs } from '@baberat/utils/t'
import { assert } from 'vitest'

const obj = qs.parse('a=c')
assert.deepEqual(obj, { a: 'c' })

const str = qs.stringify(obj)
assert.equal(str, 'a=c')
```
