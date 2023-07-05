import { PrimaryKey } from '@/types'

const useShortcut = <T extends readonly string[]>(
    primaryKey: PrimaryKey,
    secondaryKey: T,
    callback: (key: (typeof secondaryKey)[number]) => void
) => {
    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (!event[primaryKey]) return
        if (secondaryKey.includes(event.key)) return callback(event.key)
        return
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [])
}

export default useShortcut
