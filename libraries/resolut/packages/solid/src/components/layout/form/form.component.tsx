import Layout from '../layout/layout.component'

import FormComponent from './form.component.types'

const Form: FormComponent = memo(
    forwardRef(({ children, className, onSubmit, preventDefault = true, ...props }, ref) => {
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            preventDefault && event.preventDefault()

            onSubmit && onSubmit(event)
        }

        return createElement(
            Layout,
            {
                ref,
                onSubmit: handleSubmit,
                tag: 'form',
                element: 'form',
                ...props
            },
            children
        )
    })
)

export default Form
