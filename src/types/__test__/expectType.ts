import { expect } from 'vitest'

export function expectType<X, Y extends X>() {
    expect(1).toBe(1)
}
