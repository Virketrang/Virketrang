const myPlugin = {
    name: 'transform-styles',
    enforce: 'pre',
    transform(code, id) {
        if (!id.endsWith('.html') && !id.endsWith('.tsx') && !id.endsWith('.jsx') && !id.endsWith('.astro')) {
            return
        }

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

        const regex = new RegExp(`<[^>]*\\b(${attributes.join('|')})\\b="[^"]*"[^>]*>`, 'g')
        const matches = code.match(regex)

        if (!matches)
            return {
                code: code,
                map: null
            }

        matches.map((match) => {
            if (match.includes('svg')) return match
            const regex = new RegExp(`\\b(${attributes.join('|')})\\b="([^"]*)"`, 'g')

            let m
            let a = []
            while ((m = regex.exec(match)) !== null) {
                a.push(m[0]) // Attribute value
            }

            const style = `style="${a
                .map((match) => match.replaceAll('=', ': ').replaceAll('\\', '').replaceAll('"', ''))
                .join('; ')};"`

            const regex_not_global = new RegExp(`\\b(${attributes.join('|')})\\b="([^"]*)"`)

            const modified = match.replace(regex_not_global, style).replace(regex, '')
            console.log('MATCH:', match)
            console.log('MODIFIED:', modified)
            code = code.replace(match, modified)
        })

        return {
            code: code,
            map: null
        }
    },
    handleHotUpdate({ file, server }) {
        if (file.endsWith('.html') || file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.astro')) {
            // Force a full reload for these files
            server.ws.send({
                type: 'full-reload',
                path: '*'
            })
        }
    }
}
