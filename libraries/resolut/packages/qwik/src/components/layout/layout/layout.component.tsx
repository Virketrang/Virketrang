import Base from '../../base/base.component'

const Layout = Resolut.create<
    HTMLFormElement | HTMLElement | HTMLDivElement | HTMLBodyElement,
    Resolut.Component.LayoutProps
>(
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
            'class': className,
             ref, 
            ...props
        } 
    ) => {
        const _ = ref as any

        return (
            <Base
                ref={_}
                className={Utils.setClasses(className, 'resolut-layout')}
                style={{
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
                }}
                {...Utils.setAttributes({
                    grid,
                    flex
                })}
                {...props}
            >
                {children}
            </Base>
        )
    }
)

export default Layout
