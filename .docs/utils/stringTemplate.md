---
realPath: docs/utils/stringTemplate.md
---
# stringTemplate

基于文本模板字符串替换

```ts
stringTemplate(str: string, args: string[] | number[] | Record<string, any>)
```

## 例子

```ts
import { stringTemplate } from '@baberat/utils'

stringTemplate('Hello {name}, you have {count} unread messages', {
    name: 'Robert',
    count: 12,
})
// -> "Hello Robert, you have 12 unread messages"

stringTemplate('Hello {0}, you have {1} unread messages', ['Robert', 12])
// -> "Hello Robert, you have 12 unread messages"
```
