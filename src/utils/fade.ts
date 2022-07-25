function clamp(val: number) {
    return Math.min(1, Math.max(0, val))
}

function clamp$1(v: number, max: number) {
    return Math.min(Math.max(v, 0), max)
}

function toHex(v: number[]) {
    return `#${v
        .map((c) => {
            c = clamp$1(Math.round(c), 255)
            return (c < 16 ? '0' : '') + c.toString(16)
        })
        .join('')}`
}

export function fade(color: string, alpha: number) {
    // 判断是否 hex
    if (/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(color)) {
        const val = color.slice(1)
        const rgb: number[] = []
        if (val.length >= 6) {
            val.match(/.{2}/g)?.forEach((c, i) => {
                if (i < 3) {
                    rgb.push(parseInt(c, 16))
                }
            })
        } else {
            val.split('').forEach((c, i) => {
                if (i < 3) {
                    rgb.push(parseInt(c + c, 16))
                }
            })
        }
        alpha = clamp(alpha >= 1 ? alpha / 100 : alpha)
        if (alpha < 1) {
            return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
        }
        return toHex(rgb)
    }
    return color
}
