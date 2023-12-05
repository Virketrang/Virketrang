type Dictionary<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export default Dictionary
