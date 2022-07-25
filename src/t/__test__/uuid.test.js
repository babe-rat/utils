import { describe, test, expect } from 'vitest'
import { uuid } from '..'

describe('uuid', () => {
    test('正常', () => {
        expect(uuid()).toHaveLength(36)
    })
})
