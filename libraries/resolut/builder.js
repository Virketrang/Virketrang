const fs = require('fs')
const path = require('path')

const DELETE = /\/\*\* @remove start \*\*\/(.*?)\/\*\* @remove end \*\*\//gms
const INJECT = /\/\*\* @inject(.*?)\*\*\//gms
const INJECTION = /(?<=\/\*\* @inject)(.*?)(?=\*\*\/)/gms

const copy = (source, destination) => {
    try {
        fs.cpSync(source, destination, {
            recursive: true
        })
        console.log(`Copied ${source} to ${destination}`)
    } catch (error) {
        console.log(error.message)
    }
}

const walk = (dir) => {
    try {
        let results = []
        const list = fs.readdirSync(dir)
        list.forEach((file) => {
            file = path.join(dir, file)
            const stat = fs.statSync(file)
            if (stat && stat.isDirectory()) {
                // Recurse into subdir
                results = [...results, ...walk(file)]
            } else {
                // Is a file
                results.push(file)
            }
        })
        return results
    } catch (error) {
        console.error(`Error when walking dir ${dir}`, error)
    }
}

const edit = (filePath) => {
    let content = fs.readFileSync(filePath, { encoding: 'utf8' })

    const inject = content.match(INJECT)

    content = content.replace(DELETE, '')

    if (inject) {
        inject.forEach((match) => {
            content = content.replace(match, match.match(INJECTION))
        })

        console.log(`Injected in file: ${filePath}`)
    }

    fs.writeFileSync(filePath, content, { encoding: 'utf-8' })
}

const main = () => {
    const sourceDir = 'packages/react/src/components'
    const solidDir = 'packages/solid/src/components'
    const qwikDir = 'packages/qwik/src/components'

    copy(sourceDir, solidDir)
    copy(sourceDir, qwikDir)

    const filePaths = walk(solidDir).concat(walk(qwikDir))
    filePaths.forEach((filePath) => edit(filePath))

    console.log('Done!')
}

main()
