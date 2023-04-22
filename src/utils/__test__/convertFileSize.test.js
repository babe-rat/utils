import { assert, describe, it } from 'vitest'
import { convertFileSize } from '..'

describe('convertFileSize', () => {
    it('转换', () => {
        assert.deepEqual(convertFileSize(1000), { size: 1000, unit: 'B' })
        assert.deepEqual(convertFileSize(1024), { size: 1, unit: 'KB' })
        assert.deepEqual(convertFileSize(1024 * 1024), { size: 1, unit: 'MB' })
        assert.deepEqual(convertFileSize(1024 * 1024 * 1000), { size: 1000, unit: 'MB' })
        assert.deepEqual(convertFileSize(1024 * 1024 * 1024), { size: 1, unit: 'GB' })
        assert.deepEqual(convertFileSize(1024 * 1024 * 1024 * 1024), { size: 1, unit: 'TB' })
        assert.deepEqual(convertFileSize(1024 * 1024 * 1024 * 1024 * 10240000), {
            size: 10240000,
            unit: 'TB',
        })
    })

    it('自定义单位', () => {
        const units = ['B', 'K', 'M', 'G', 'T']
        assert.deepEqual(convertFileSize(1024, units), { size: 1, unit: 'K' })
        assert.deepEqual(convertFileSize(1024 * 1024, units), { size: 1, unit: 'M' })
    })
})
