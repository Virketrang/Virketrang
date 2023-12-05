import esbuild from 'esbuild'
import unimport from 'unimport/unplugin'

async function watch() {
    let ctx = await esbuild.context({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        logLevel: 'info',
        outfile: './dist/index.js',
        platform: 'node',
        loader: { '.ts': 'ts' },
        external: ['@google-cloud/storage', 'zod'],
        minify: false,
        sourcemap: true,
        format: 'esm',
        plugins: [
            unimport.esbuild({
                dirs: ['src/modules', 'src/common', '../../../packages'],
                imports: [
                    { name: 'Hono', from: 'hono' },
                    { name: 'setCookie', from: 'hono/cookie' },
                    { name: 'getCookie', from: 'hono/cookie' },
                    { name: 'cors', from: 'hono/cors' },
                    { name: 'serve', from: '@hono/node-server' },
                    { name: 'validator', from: 'hono/validator' },
                    { as: 'postgres', from: 'postgres' },
                    { name: 'z', from: 'zod' },
                    { name: '*', as: 'jwt', from: 'hono/jwt' },
                    { name: '*', as: 'crypto', from: 'crypto' },
                    { name: '*', as: 'path', from: 'path' },
                    { name: 'promisify', from: 'util' },
                    { name: 'Storage', from: '@google-cloud/storage' }
                ],
                dts: true
            })
        ]
    })
    await ctx.watch()
    console.log('Watching for file changes...')
}

watch()
