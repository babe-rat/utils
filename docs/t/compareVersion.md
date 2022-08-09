# compareVersion

对比语义化版本号

```ts
import { compareVersion } from '@baberat/utils/t'
import { assert } from 'vitest'

assert.equal(compareVersion('11.1.1', '10.0.0'), 1)
assert.equal(compareVersion('10.0.0', '10.0.0'), 0)
assert.equal(compareVersion('10.0.0', '11.1.1'), -1)
```
