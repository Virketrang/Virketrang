import Base from '../../base/base.component'
import { TypographyComponent } from './typography.component.types'

const Typography: TypographyComponent = Resolut.create(
    (
        {
            thin,
            extraLight,
            light,
            regular,
            medium,
            semiBold,
            bold,
            extraBold,
            black,
            decorationColor,
            decorationThickness,
            blink,
            lineThrough,
            overline,
            underline,
            dashed,
            dotted,
            double,
            italic,
            primary = true,
            secondary,
            solid,
            wavy,
            letterSpacing,
            fontSize,
            stretch,
            lineHeight,
            wrap,
            nowrap,
            balance,
            uppercase,
            lowercase,
            capitalize,
            start,
            center,
            end,
            justify,
            children,
            class: className,
            style,
            /** @inject ref, **/
            ...props
        } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        return (
            <Base
                ref={ref}
                className={Utils.setClasses(className, 'resolut-typography')}
                style={Utils.setInlineStyles({
                    ...Utils.setCSSVariables({
                        textAlign: Utils.setValueFromBoolean({ start, center, end, justify }),
                        fontWeight: Utils.setFontWeight({
                            thin,
                            extraLight,
                            light,
                            regular,
                            medium,
                            semiBold,
                            bold,
                            extraBold,
                            black
                        }),
                        decorationColor,
                        decorationThickness,
                        letterSpacing,
                        fontSize,
                        fontStyle: italic ? 'italic' : undefined,
                        textDecorationStyle: Utils.setValueFromBoolean({ dashed, dotted, double, solid, wavy }),
                        textDecorationLine: Utils.setTextDecoration({ lineThrough, overline, underline, blink }),
                        lineHeight,
                        display: stretch ? 'inline-block' : undefined,
                        textWrap: Utils.setValueFromBoolean({ wrap, nowrap, balance }),
                        textTransform: Utils.setValueFromBoolean({ uppercase, lowercase, capitalize })
                    }),
                    ...style
                })}
                {...Utils.setAttributes({
                    color: Utils.setValueFromBoolean({ primary, secondary })
                })}
                stretch={stretch}
                {...props}
            >
                {children}
            </Base>
        )
    }
)

export default Typography
