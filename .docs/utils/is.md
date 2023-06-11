---
realPath: docs/utils/is.md
---
# is

判断

## isFunction

判断是否函数

```js
import { isFunction } from '@baberat/utils'

isFunction(function fn() {}) // => true
```

## isString

判断是否字符串

```js
import { isString } from '@baberat/utils'

isString('code') // => true
```

## isObject

判断是否对象

```js
import { isObject } from '@baberat/utils'

isObject({}) // => true
```

## isDate

判断是否 Date 格式

```js
import { isDate } from '@baberat/utils'

isDate(new Date())
```

## isRegExp

判断是否 正则表达式

```js
import { isRegExp } from '@baberat/utils'

isRegExp(/[1-9]/)
```
