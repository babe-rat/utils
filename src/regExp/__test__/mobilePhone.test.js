import { assert, describe, it } from 'vitest'
import { MobilePhoneRegExp } from '..'

describe('mobilePhone', () => {
    it('验证手机号', () => {
        assert.equal(MobilePhoneRegExp.test(13913563888), true)
        assert.equal(MobilePhoneRegExp.test(14913563888), true)
        assert.equal(MobilePhoneRegExp.test(12913563888), false)
        assert.equal(MobilePhoneRegExp.test(139135638889), false)
    })
})
