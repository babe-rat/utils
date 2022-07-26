import { assert, describe, it } from 'vitest'
import { stringTemplate } from '..'

describe('stringTemplate', () => {
    it('正常使用', () => {
        assert.deepEqual(
            stringTemplate('Hello {name}, you have {count} unread messages', {
                name: 'Robert',
                count: 12,
            }),
            'Hello Robert, you have 12 unread messages',
        )

        assert.deepEqual(
            stringTemplate('Hello {0}, you have {1} unread messages', ['Robert', 12]),
            'Hello Robert, you have 12 unread messages',
        )
    })
})
