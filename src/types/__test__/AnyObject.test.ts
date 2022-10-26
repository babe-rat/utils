import { describe, it } from 'vitest'
import { AnyObject } from '../AnyObject'
import { expectType } from './expectType'

describe('AnyObject', () => {
    it('is Object', () => {
        expectType<AnyObject, {}>()
        expectType<AnyObject, []>()
        expectType<AnyObject, () => any>()
        expectType<AnyObject, RegExp>()
    })

    it('is not Object', () => {
        expectType<AnyObject, number>()
        expectType<AnyObject, boolean>()
        expectType<AnyObject, unknown>()
    })
})
