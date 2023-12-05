export {}
declare global {
    const Link: (typeof import('next/link'))['default']
    const NextRequest: (typeof import('next/server'))['NextRequest']
    const NextResponse: (typeof import('next/server'))['NextResponse']
    const createContext: (typeof import('react'))['createContext']
    const createRef: (typeof import('react'))['createRef']
    const memo: (typeof import('react'))['memo']
    const revalidatePath: (typeof import('next/cache'))['revalidatePath']
    const revalidateTag: (typeof import('next/cache'))['revalidateTag']
    const useContext: (typeof import('react'))['useContext']
    const useEffect: (typeof import('react'))['useEffect']
    const usePathname: (typeof import('next/navigation'))['usePathname']
    const useReducer: (typeof import('react'))['useReducer']
    const useRouter: (typeof import('next/navigation'))['useRouter']
    const useState: (typeof import('react'))['useState']
}
