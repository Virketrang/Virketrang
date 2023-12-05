import { component$ } from '@builder.io/qwik'
import Input from '../input/input.component'

const Text = component$(({ email, password, tel, number, url, ...props }: Resolut.Component.TextProps) => {
    return (
        <Input
            tag="text"
            element="input"
            type={Utils.setValueFromBoolean({ email, password, tel, number, url }) || 'text'}
            {...props}
        />
    )
})

export default Text
