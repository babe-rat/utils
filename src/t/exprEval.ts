import { Parser, Value } from 'expr-eval'

/**
 * Mathematical expression evaluator in JavaScript
 * @see https://www.npmjs.com/package/expr-eval
 */
export function parse(expression: string) {
    const parser = new Parser()
    return parser.parse(expression)
}

export function evaluate(expression: string, variables?: Value) {
    return Parser.evaluate(expression, variables)
}
