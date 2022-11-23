import { assert, describe, it } from 'vitest'
import { decimal } from '..'

describe('decimal', () => {
    it('plus', () => {
        assert.equal(decimal.plus(0.1, 0.2), 0.3)
        assert.notEqual(0.1 + 0.2, 0.3)
    })
    it('minus', () => {
        assert.equal(decimal.minus(2.2, 1), 1.2)
        assert.notEqual(2.2 - 1, 1.2)
    })

    it('div', () => {
        assert.equal(decimal.div(2.1, 10), 0.21)
        assert.notEqual(2.1 / 10, 0.21)
    })

    it('mul', () => {
        assert.equal(decimal.mul(2.01, 10), 20.1)
        assert.notEqual(2.01 * 10, 20.1)
    })
})
