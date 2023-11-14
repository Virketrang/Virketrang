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
        external: ['dotenv', 'zod'],
        minify: false,
        sourcemap: true,
        format: 'esm',
        plugins: [
            unimport.esbuild({
                dirs: ['src/modules', 'src/common', 'src/services', '../../../packages'],
                imports: [
                    { name: 'Hono', from: 'hono' },
                    { name: 'serve', from: '@hono/node-server' },
                    { name: 'validator', from: 'hono/validator' },
                    { as: 'postgres', from: 'postgres' },
                    { name: 'z', from: 'zod' }
                ],
                dts: true
            })
        ]
    })
    await ctx.watch()
    console.log('Watching for file changes...')
}

watch()
