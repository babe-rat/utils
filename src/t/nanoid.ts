import { nanoid as non } from 'nanoid'

/**
 * JavaScript 字符串ID生成器
 * @see https://www.npmjs.com/package/nanoid
 */
export function nanoid(size?: number): string {
    return non(size)
}
