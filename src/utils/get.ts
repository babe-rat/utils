import { isObject } from './is'

/**
 * 获取对象属性值
 * @param object
 * @param path
 * @returns
 */
export function get(object: unknown, path: string): any {
    const keys = path.split('.')
    let result = object

    keys.forEach((key) => {
        result = isObject(result) ? result[key] ?? '' : ''
    })

    return result
}
