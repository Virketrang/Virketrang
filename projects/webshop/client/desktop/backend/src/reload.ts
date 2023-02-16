import reload from 'electron-reloader';

const env = process.env['NODE_ENV'] || 'development';
console.log(env);
if (env === 'development') {
    try {
        reload(module, {
            debug: true,
            watchRenderer: true,
            ignore: [
                'src',
                'README.md',
                'package.json',
                'tsconfig.app.json',
                'tsconfig.build.json',
                'tsconfig.spec.json',
            ],
        });
    } catch (_) {
        console.log('Error');
    }
}
