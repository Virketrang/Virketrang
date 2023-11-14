export default abstract class Resolut {
    public static create<T1, T2 = {}>(component: React.ForwardRefRenderFunction<T1, T2>) {
        return memo(forwardRef(component)) as Resolut.Component<Resolut.Component.Ref<T1> & T2>
    }
}
