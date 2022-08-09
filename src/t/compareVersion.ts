import compareVersions from 'compare-versions'

/**
 * Compare semver version
 * @see https://www.npmjs.com/package/compare-versions
 */
export function compareVersion(v1: string, v2: string) {
    return compareVersions(v1, v2)
}
