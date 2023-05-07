import reload from 'electron-reloader'

const __prod = process.env['NODE_ENV'] === 'production'

if (__prod) {
    try {
        reload(module, {
            debug: true,
            watchRenderer: true,
            ignore: []
        })
    } catch (_) {
        console.log('Electron Reloader error. Please look in reload.ts')
    }
}
