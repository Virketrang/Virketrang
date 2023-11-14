import Utils from '../../../../../../utils'
import Input from '../input/input.component'
import TextComponent from './text.component.types'

const Text: TextComponent = memo(
    forwardRef(({ email, password, tel, number, url, ...props }, ref) => {
        return createElement(
            Input,
            {
                tag: 'text',
                element: 'input',
                type: Utils.setValueFromBoolean({ email, password, tel, number, url }) || 'text',
                ref,
                ...props
            },
            null
        )
    })
)

export default Text
