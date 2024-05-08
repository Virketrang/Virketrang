import fs from 'fs/promises'

const attributes = [
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom',
    'margin-inline',
    'margin-block',
    'margin',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom',
    'padding-inline',
    'padding-block',
    'padding',
    'gap',
    'left',
    'right',
    'top',
    'bottom',
    'inset',
    'border-radius',
    'min-width',
    'min-height',
    'max-width',
    'max-height',
    'width',
    'height',
    'grid-template-columns',
    'grid-template-rows',
    'font-size',
    'z-index',
    'opacity'
]

const uniqueRulesFile = '.unique_rules.json'

export default function ViteHTMLAttributesPlugin() {
    let globalRules

    try {
        const data = fs.readFileSync(uniqueRulesFile, 'utf-8')
        globalRules = new Set(JSON.parse(data)) // Parse from JSON
    } catch (error) {
        globalRules = new Set() // Create a new set if file doesn't exist
    }

    async function saveUniqueRules() {
        await fs.writeFile(uniqueRulesFile, JSON.stringify(Array.from(globalRules)), 'utf-8')
    }

    return {
        name: 'vite-plugin-html-attributes',
        async transform(code, id) {
            if (/\.(astro|jsx|tsx|html)$/.test(id)) {
                const css = attributes
                    .map((attribute) => {
                        const regex = new RegExp(`\\b${attribute}="([^"]+)"`, 'g')
                        const matches = code.matchAll(regex)

                        return Array.from(matches)
                            .filter((match) => {
                                const value = match[1]
                                const rule = `*[${attribute}="${value}"] { ${attribute}: ${value}; }`
                                if (!globalRules.has(rule)) {
                                    globalRules.add(rule)
                                    return true // Add new rule to the set
                                }
                                return false // Include only new rules
                            })
                            .map((match) => {
                                const value = match[1]
                                return `*[${attribute}="${value}"] { ${attribute}: ${value}; }`
                            })
                            .join('\n')
                    })
                    .filter((rule) => rule.trim() !== '')
                    .join('\n')

                const cssFilename = 'attributes.css'
                await fs.appendFile(cssFilename, css + '\n')

                console.log('CSS: ', css)

                await saveUniqueRules()

                return {
                    code
                }
            }
        }
    }
}
