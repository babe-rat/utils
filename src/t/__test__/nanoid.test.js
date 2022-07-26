import { describe, test, expect } from 'vitest'
import { nanoid } from '..'

describe('nanoid', () => {
    test('正常', () => {
        expect(nanoid()).toHaveLength(21)
        expect(nanoid(6)).toHaveLength(6)
    })
})
