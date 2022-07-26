import qs from 'qs'

/**
 * 字符串解析
 * @see https://www.npmjs.com/package/qs
 */

export interface QsStringifyOptions {
    encode?: boolean
    encodeValuesOnly?: boolean
    encoder?: (str: string) => string
    indices?: boolean
    arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma'
    allowDots?: boolean
    delimiter?: string | RegExp
    serializeDate?: (d: Date) => string
}

export function stringify(value: Record<string, any>, options?: QsStringifyOptions): string {
    return qs.stringify(value, options)
}

export interface QsParseOptions {
    plainObjects?: boolean
    allowPrototypes?: boolean
    depth?: number
    parameterLimit?: number
    ignoreQueryPrefix?: boolean
    delimiter?: string | RegExp
    allowDots?: boolean
    charset?: string
}

export function parse(value: string, options?: QsParseOptions): Record<string, any> {
    return qs.parse(value, options)
}
