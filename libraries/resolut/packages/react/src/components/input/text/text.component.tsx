import Input from '../input/input.component'

const Text = Resolut.create<HTMLInputElement, Resolut.Component.TextProps>(
    (
        { email, password, tel, number, url, /** @inject ref, **/ ...props } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        return (
            <Input
                tag="text"
                element="input"
                type={Utils.setValueFromBoolean({ email, password, tel, number, url }) || 'text'}
                ref={ref}
                {...props}
            />
        )
    }
)

export default Text
