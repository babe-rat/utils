/**
 * 判断是否是函数
 * @param val
 * @returns boolean
 */
export const isFunction = (val: unknown): val is Function =>
    Object.prototype.toString.call(val) === '[object Function]'

/**
 * 判断是否是字符串
 * @param value
 * @returns boolean
 */
export const isString = (value: unknown) =>
    Object.prototype.toString.call(value) === '[object String]'

/**
 * 判断是否是对象
 * @param val
 * @returns boolean
 */
export const isObject = (val: unknown): val is Record<any, any> =>
    Object.prototype.toString.call(val) === '[object Object]'

/**
 * 判断是否是时间格式
 * @param val
 * @returns boolean
 */
export const isDate = (val: unknown) => Object.prototype.toString.call(val) === '[object Date]'

/**
 * 判断是否是正则表达式
 * @param val
 * @returns boolean
 */
export const isRegExp = (val: unknown) => Object.prototype.toString.call(val) === '[object RegExp]'
