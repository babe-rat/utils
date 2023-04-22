import { assert, describe, it } from 'vitest'
import { get } from '..'

describe('get', () => {
    const obj = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: '3',
            },
        },
    }
    it('多层结构', () => {
        assert(get(obj, 'a') === 1)
        assert(get(obj, 'b.c') === 2)
        assert.deepEqual(get(obj, 'b'), {
            c: 2,
            d: {
                e: '3',
            },
        })
        assert(get(obj, 'b.d.e') === '3')
    })
})
