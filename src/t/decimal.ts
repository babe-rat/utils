import { Decimal } from 'decimal.js'
/**
 * An arbitrary-precision Decimal type for JavaScript.
 *
 * @see https://www.npmjs.com/package/tiny-emitter
 */

// x + y
export function plus(x: number, y: number) {
    const a = new Decimal(x)
    return a.plus(y)
}

// x - y
export function minus(x: number, y: number) {
    const a = new Decimal(x)
    return a.minus(y)
}

// x / y
export function div(x: number, y: number) {
    const a = new Decimal(x)
    return a.div(y)
}

// x * y
export function mul(x: number, y: number) {
    const a = new Decimal(x)
    return a.mul(y)
}
