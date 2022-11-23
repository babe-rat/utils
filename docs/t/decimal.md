---
title: decimal
group:
    title: t
    path: /t
    order: 4
---

# decimal

数值精度，[详见](https://github.com/MikeMcl/decimal.js)

```ts
import { decimal } from '@baberat/utils/t'
```

## 使用

### plus(x: number, y: number)

求和

```js
0.1 + 0.2 // 0.30000000000000004

decimal.plus(0.1, 0.2) // 0.3
```

### minus(x: number, y: number)

求差

```js
2.2 - 1 // 1.2000000000000002

decimal.minus(2.2, 1) // 1.2
```

### div(x: number, y: number)

除

```js
2.1 / 10 // 0.21000000000000002

decimal.div(2.1, 10) // 0.21
```

### mul(x: number, y: number)

乘

```js
2.01 * 10 // 20.099999999999998

decimal.mul(2.01, 10) // 20.1
```
