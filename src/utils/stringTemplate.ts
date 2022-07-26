const patt = /\{([0-9a-zA-Z_]+)\}/g

type Args = string[] | number[] | Record<string, any>

export function stringTemplate(string: string, ...rest: any[]): string {
    let args: Args

    if (rest.length === 1 && typeof rest[0] === 'object') {
        args = rest[0]
    } else {
        args = rest
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(patt, (match, i: keyof Args, index) => {
        if (string[index - 1] === '{' && string[index + match.length] === '}') {
            return i
        }

        const result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null
        if (result === null || result === undefined) {
            return ''
        }

        return result
    })
}
