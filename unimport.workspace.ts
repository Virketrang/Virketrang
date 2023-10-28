export default abstract class AutoImport {
    public static readonly react = [
        { name: 'default', as: 'React', from: 'react' },
        { name: 'useState', from: 'react' },
        { name: 'useCallback', from: 'react' },
        { name: 'useEffect', from: 'react' },
        { name: 'useContext', from: 'react' },
        { name: 'useCallback', from: 'react' },
        { name: 'useMemo', from: 'react' },
        { name: 'useReducer', from: 'react' },
        { name: 'useRef', from: 'react' },
        { name: 'forwardRef', from: 'react' },
        { name: 'memo', from: 'react' },
        { name: 'Fragment', from: 'react' },
        { name: 'Suspense', from: 'react' },
        { name: 'createRef', from: 'react' },
        { name: 'createContext', from: 'react' },
        { name: 'createElement', from: 'react' }
    ]

    public static readonly nanostores = [
        { name: 'useStore', from: '@nanostores/react' },
        { name: 'atom', from: 'nanostores' },
        { name: 'persistentAtom', from: '@nanostores/persistent' },
        { name: 'useStore', from: '@nanostores/react' }
    ]

    public static readonly resolut = [
        { name: 'Field', from: 'resolut' },
        { name: 'Form', from: 'resolut' },
        { name: 'Input', from: 'resolut' },
        { name: 'Button', from: 'resolut' },
        { name: 'Label', from: 'resolut' },
        { name: 'Select', from: 'resolut' }
    ]
    public static readonly swc = [{ name: 'default', as: 'useSWR', from: 'swr' }]
}
