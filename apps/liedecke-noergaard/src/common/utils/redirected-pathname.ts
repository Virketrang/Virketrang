export default function redirectedPathName(pathName: string, newLocale: string) {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = newLocale
    return segments.join('/')
}
