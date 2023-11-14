/** @type {import("prettier").Config} */
module.exports = {
    plugins: ['prettier-plugin-astro'],
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    arrowParens: 'always',
    bracketSpacing: true,
    quoteProps: 'consistent',
    bracketSameLine: false,
    jsxSingleQuote: false,
    semi: false,
    trailingComma: 'none',
    astroAllowShorthand: true,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ]
}
