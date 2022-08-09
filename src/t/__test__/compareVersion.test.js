import { assert, describe, it } from 'vitest'
import { compareVersion } from '..'

describe('compareVersion', () => {
    it('基本使用', () => {
        assert.equal(compareVersion('11.1.1', '10.0.0'), 1)
        assert.equal(compareVersion('10.0.0', '10.0.0'), 0)
        assert.equal(compareVersion('10.0.0', '11.1.1'), -1)
    })
})
