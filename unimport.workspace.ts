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
        { name: 'atom', from: 'nanostores' },
        { name: 'map', from: 'nanostores' },
        { name: 'persistentAtom', from: '@nanostores/persistent' },
        { name: 'persistentMap', from: '@nanostores/persistent' },
        { name: 'useStore', from: '@nanostores/solid' }
    ]

    public static readonly resolut = [
        { name: 'Field', from: 'resolut' },
        { name: 'Form', from: 'resolut' },
        { name: 'Main', from: 'resolut' },
        { name: 'Section', from: 'resolut' },
        { name: 'Article', from: 'resolut' },
        { name: 'Div', from: 'resolut' },
        { name: 'Select', from: 'resolut' },
        { name: 'Text', from: 'resolut' },
        { name: 'Button', from: 'resolut' },
        { name: 'Label', from: 'resolut' },
        { name: 'Heading', from: 'resolut' },
        { name: 'Paragraph', from: 'resolut' },
        { name: 'Link', from: 'resolut' },
        { name: 'Span', from: 'resolut' }
    ]

    public static readonly swc = [{ name: 'default', as: 'useSWR', from: 'swr' }]

    public static readonly solid = [
        { name: 'Dynamic', from: 'solid-js/web' },
        { name: 'For', from: 'solid-js' },
        { name: 'Show', from: 'solid-js' },
        { name: 'createSignal', from: 'solid-js' },
        { name: 'onMount', from: 'solid-js' },
        { name: 'onCleanup', from: 'solid-js' },
        { name: 'createEffect', from: 'solid-js' }
    ]

    public static readonly qwik = [
        // { name: 'component$', from: '@builder.io/qwik' },
        { name: 'Slot', from: '@builder.io/qwik' },
        { name: 'useSignal', from: '@builder.io/qwik' }
    ]
}
