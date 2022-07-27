---
title: exprEval
group:
    title: t
    path: /t
    order: 4
---

# exprEval

数学表达式求值，[详见](https://www.npmjs.com/package/expr-eval)

```ts
import { exprEval } from '@baberat/utils/t'
import { assert } from 'vitest'

const expr = exprEval.parse('2 * x + 1')
assert.equal(expr.evaluate({ x: 3 }), 7)

assert.equal(exprEval.evaluate('6 * x', { x: 7 }), 42)
```
