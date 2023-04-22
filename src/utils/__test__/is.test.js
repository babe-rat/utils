import { assert, describe, it } from 'vitest'
import { isFunction, isString, isObject, isDate, isRegExp } from '..'

describe('is', () => {
    it('isFunction', () => {
        assert(isFunction(function () {}) === true)
        assert(isFunction('') === false)
    })

    it('isString', () => {
        assert(isString('') === true)
        assert(isFunction({}) === false)
    })

    it('isObject', () => {
        assert(isObject({}) === true)
        assert(isFunction({}) === false)
    })

    it('isDate', () => {
        assert(isDate(new Date()) === true)
    })

    it('isRegExp', () => {
        assert(isRegExp(/[1-9]/) === true)
        assert(isRegExp(1) === false)
    })
})
