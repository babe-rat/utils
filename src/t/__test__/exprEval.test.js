import { assert, describe, it } from 'vitest'
import { exprEval } from '..'

describe('exprEval', () => {
    it('parse', () => {
        const expr = exprEval.parse('2 * x + 1')
        assert.equal(expr.evaluate({ x: 3 }), 7)

        assert.equal(exprEval.evaluate('6 * x', { x: 7 }), 42)
    })
})
