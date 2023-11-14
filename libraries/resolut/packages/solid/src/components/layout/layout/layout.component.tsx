import Utils from '../../../../../../utils'
import Base from '../../base/base.component'

import LayoutComponent from './layout.component.types'

const Layout: LayoutComponent = memo(
    forwardRef(
        (
            {
                center,
                flex,
                grid,
                columns,
                rows,
                horizontal,
                'align:baseline': alignBaseline,
                'align:stretch': alignStretch,
                'align:center': alignCenter,
                'align:start': alignStart,
                'align:end': alignEnd,
                'justify:between': justifyBetween,
                'justify:around': justifyAround,
                'justify:center': justifyCenter,
                'justify:start': justifyStart,
                'justify:end': justifyEnd,
                'justify:evenly': justifyEvenly,
                vertical,
                reverse,
                gap,
                children,
                style,
                className,
                ...props
            },
            ref
        ) => {
            return createElement(
                Base,
                {
                    ref,
                    className: Utils.setClasses(className, 'resolut-layout'),
                    style: {
                        ...Utils.setCSSVariables({
                            columns,
                            rows,
                            alignItems: center
                                ? 'center'
                                : Utils.setAlignItems({
                                      alignBaseline,
                                      alignStretch,
                                      alignCenter,
                                      alignStart,
                                      alignEnd
                                  }),
                            justifyContent: center
                                ? 'center'
                                : Utils.setJustifyContent({
                                      justifyBetween,
                                      justifyAround,
                                      justifyCenter,
                                      justifyStart,
                                      justifyEnd,
                                      justifyEvenly
                                  }),
                            flexDirection: Utils.setFlexDirection({
                                horizontal,
                                vertical,
                                reverse
                            }),
                            gap
                        }),
                        ...style
                    },
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
