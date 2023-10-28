import Utils from '../../utils'

import LayoutComponent from './layout.component.types'

const Layout: LayoutComponent = memo(
    forwardRef(
        (
            {
                component = 'div',
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
                horizontal,
                vertical,
                reverse,
                alignItems,
                justifyContent,
                gap,
                children,
                className,
                style,
                ...props
            },
            ref
        ) => {
            return createElement(
                component,
                {
                    ref,
                    style: {
                        ...Utils.setCSSVariables({
                            columns,
                            rows,
                            alignItems: center ? 'center' : alignItems,
                            justifyContent: center ? 'center' : justifyContent,
                            flexDirection: Utils.evaluateFlexDirection({
                                horizontal: !!horizontal,
                                vertical: !!vertical,
                                reverse: !!reverse
                            }),
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
                    className: Utils.setClasses(className, `resolut-${component}`),
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

export default Layout
