const DEFAULT_UNITS = ['B', 'KB', 'MB', 'GB', 'TB']

export const convertFileSize = (size: number, units = DEFAULT_UNITS) => {
    let i = 0
    while (size >= 1024 && i < units.length - 1) {
        size /= 1024
        i++
    }
    return {
        size,
        unit: units[i],
    }
}
