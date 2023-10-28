import Utils from '../../utils'

import FormComponent from './form.component.types'

const Form: FormComponent = memo(
    forwardRef(
        (
            {
                center = false,
                stretch = false,
                margin,
                padding,
                width,
                height,
                minWidth,
                minHeight,
                flex = false,
                grid = false,
                columns,
                rows,
                vertical,
                horizontal,
                reverse,
                alignItems,
                justifyContent,
                gap,
                children,
                className,
                onSubmit,
                preventDefault = true,
                style,
                ...props
            },
            ref
        ) => {
            const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                preventDefault && event.preventDefault()

                onSubmit && onSubmit(event)
            }

            return createElement(
                'form',
                {
                    ref,
                    onSubmit: handleSubmit,
                    style: {
                        ...Utils.setCSSVariables({
                            columns,
                            rows,
                            flexDirection: Utils.evaluateFlexDirection({
                                horizontal: !!horizontal,
                                vertical: !!vertical,
                                reverse: !!reverse
                            }),
                            alignItems: center ? 'center' : alignItems,
                            justifyContent: center ? 'center' : justifyContent,
                            gap
                        }),
                        ...Utils.setInlineStyles({
                            margin,
                            padding,
                            width: stretch ? '100%' : width,
                            height,
                            minWidth,
                            minHeight
                        }),
                        ...style
                    },
                    className: Utils.setClasses(className, `resolut-form`),
                    ...Utils.setAttributes({
                        grid,
                        flex
                    }),
                    ...props
                },
                children
            )
        }
    )
)

export default Form
