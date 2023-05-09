import { assert, describe, it } from 'vitest'
import { EmailRegExp } from '..'

describe('mobilePhone', () => {
    it('验证手机号', () => {
        assert.equal(EmailRegExp.test('212322834@qq.com'), true)
        assert.equal(EmailRegExp.test('yemu419@163.com'), true)
        assert.equal(EmailRegExp.test('@163.com'), false)
    })
})
