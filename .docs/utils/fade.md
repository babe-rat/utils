---
realPath: docs/utils/fade.md
---
# fade

颜色设置透明度

```ts
fade(color: string, alpha: number);
```

## 参数

1. `color` 色值，只支持十六进制
2. `alpha` 透明度

## 例子

```ts
import { fade } from '@baberat/utils'

fade('#000'); // => #000000
fade('#000', 0.1); // => rgba(0, 0, 0, 0.1)
fade('#000', 1); // => rgba(0, 0, 0, 0.01)
fade('#000', 90); // => rgba(0, 0, 0, 0.9)

fade('rgb(0, 0, 0)', 10 // => rgb(0, 0, 0)
```
