export default class Nanostore<O extends object> {
    public store: Nanostore.WritableAtom<O>
    public defaultValue: O

    constructor(name: string, initial: O) {
        this.defaultValue = initial
        this.store = persistentAtom<O>(name, initial, { encode: JSON.stringify, decode: JSON.parse })
    }

    public mutate(field: keyof Flatten<O>, value: Flatten<O>[keyof Flatten<O>]) {
        console.log('mutate', field, value)
        return this.store.set(Utils.recursivelyTraverseNestedObject<O>(this.store.get(), field, value))
    }

    public reset() {
        return this.store.set(this.defaultValue)
    }

    public get(): O {
        return this.store.get()
    }

    public set(value: O) {
        return this.store.set(value)
    }

    public get lc(): number {
        return this.store.lc
    }

    public subscribe(listener: (value: Atom.ReadonlyIfObject<O>) => void): () => void {
        return this.store.subscribe(listener)
    }

    public listen(listener: (value: Atom.ReadonlyIfObject<O>) => void): () => void {
        return this.store.listen(listener)
    }

    public off(): void {
        return this.store.off()
    }

    public get value(): O | undefined {
        return this.store.value
    }

    public useStore(): Solid.Accessor<O> {
        return useStore(this.store)
    }
}
