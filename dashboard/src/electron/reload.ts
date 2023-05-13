const __prod = process.env['NODE_ENV'] === 'production'

;(async () => {
    if (__prod) return

    const reload = (await import('electron-reloader')).default

    reload(module, {
        debug: true,
        watchRenderer: true,
        ignore: []
    })
})()
