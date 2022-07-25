import { describe, test, vi, assert } from 'vitest'
import { eventBus } from '..'

describe('eventBus', () => {
    test('$on', () => {
        vi.useFakeTimers()
        eventBus.$on('action-1', (data) => {
            assert(data === 'hello')
        })
        setTimeout(() => {
            eventBus.$emit('action-1', 'hello')
        }, 100)
        vi.runAllTimers()
    })
})
