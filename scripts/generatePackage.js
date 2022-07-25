const fs = require('fs-extra')
const rawPackageInfo = require('../package.json')
const omit = require('lodash.omit')
const { join } = require('path')

function main() {
    const rootDir = join(__dirname, '..')
    const packageDir = join(rootDir, './es')
    const packageInfo = omit(rawPackageInfo, ['devDependencies', 'scripts'])
    const packageJsonFile = join(packageDir, './package.json')

    fs.writeJSON(packageJsonFile, packageInfo, { spaces: 2 })
    ;['README.md'].map((file) => fs.copyFile(join(rootDir, file), join(packageDir, file)))
}

main()
