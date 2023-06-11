import { assert, describe, it } from 'vitest'
import { crypto } from '..'

describe('crypto', () => {
    it('crypto', () => {
        const password = 'test@123'
        const text = crypto.encrypt(password)
        assert.equal(crypto.decrypt(text), password)
    })

    it('chat', () => {
        const password = '~!#$%^&*@123'
        const text = crypto.encrypt(password)
        assert.equal(crypto.decrypt(text), password)
    })
})
