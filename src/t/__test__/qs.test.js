import { assert, describe, it } from 'vitest'
import { qs } from '..'

describe('qs', () => {
    it('parse', () => {
        assert.deepEqual(qs.parse('foo[bar]=baz'), {
            foo: {
                bar: 'baz',
            },
        })
    })
    it('stringify', () => {
        assert.equal(qs.stringify({ a: 'b' }), 'a=b')
        assert.equal(qs.stringify({ a: { b: 'c' } }), 'a%5Bb%5D=c')
    })
    it('stringify encode:false', () => {
        const unencoded = qs.stringify({ a: { b: 'c' } }, { encode: false })
        assert.equal(unencoded, 'a[b]=c')
    })
})
