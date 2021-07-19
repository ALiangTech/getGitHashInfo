const rollup = require('rollup').rollup
const path = require('path')
const entry = {
    input: path.resolve(__dirname, './../src/index'),
    external: [
        'fs/promises',
        'path'
    ]
}
const output = {
    file: path.resolve(__dirname, './../dist/index.js'),
    format: 'cjs', //node或者webpack 环境下使用
}
async function build() {
    const bundle = await rollup(entry)
    await bundle.write(output);
}
build().then().catch(err => console.error(err))
