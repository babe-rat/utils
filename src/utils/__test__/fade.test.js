import { assert, describe, it } from 'vitest'
import { fade } from '..'

describe('fade', () => {
    it('设置透明度-基本使用', () => {
        assert(fade('#000') === '#000000')
        assert(fade('#000', 0.1) === 'rgba(0, 0, 0, 0.1)')
        assert(fade('#000', 1) === 'rgba(0, 0, 0, 0.01)')
        assert(fade('#000', 90) === 'rgba(0, 0, 0, 0.9)')
        assert(fade('#000', 100) === '#000000')
        assert(fade('#000', 101) === '#000000')
        assert(fade('#0003', 0.1) === 'rgba(0, 0, 0, 0.1)')

        assert(fade('#36cfc9', 45) === 'rgba(54, 207, 201, 0.45)')
        assert(fade('#36cfc9', -10) === 'rgba(54, 207, 201, 0)')
        assert(fade('#36cfc9', 101) === '#36cfc9')

        assert(fade('#fff') === '#ffffff')
        assert(fade('#fff', -0.1) === 'rgba(255, 255, 255, 0)')
    })

    it('只支持 hex 设置透明度', () => {
        assert(fade('rgb(0, 0, 0)', 10) === 'rgb(0, 0, 0)')
        assert(fade('rgba(0, 0, 0, 0.1)', 10) === 'rgba(0, 0, 0, 0.1)')
        assert(fade('hsl(120, 100%, 50%)', 10) === 'hsl(120, 100%, 50%)')
    })
})
