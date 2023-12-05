import { component$ } from '@builder.io/qwik'
import { Base } from '../..'

export default component$(
    ({
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
        tag,
        reverse,
        element,
        gap,
        children,
        style,
        'class': className,
        ...props
    }: Resolut.Component.LayoutProps) => {
        return (
            <Base
                element={element}
                tag={tag}
                {...(props as any)}
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
                    ...(style as Resolut.CSSProperties)
                }}
                {...Utils.setAttributes({
                    grid,
                    flex
                })}
                class={Utils.setClasses(className, 'resolut-layout')}
            >
                <Slot />
            </Base>
        )
    }
)
