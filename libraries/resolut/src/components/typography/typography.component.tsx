import Utils from '../../utils'
import Base from '../base/base.component'

import { TypographyComponent } from './typography.component.types'

const Typography: TypographyComponent = memo(
    forwardRef(
        (
            {
                color = 'primary',
                textAlign,
                fontWeight,
                letterSpacing,
                fontSize,
                lineHeight,
                wrap = false,
                nowrap = false,
                balance = false,
                children,
                className,
                style,
                uppercase = false,
                lowercase = false,
                capitalize = false,
                ...props
            },
            ref
        ) => {
            return createElement(
                Base,
                {
                    ref,
                    className: Utils.setClasses(className, 'resolut-typography'),
                    style: Utils.setInlineStyles({
                        ...style,
                        textAlign,
                        fontWeight,
                        letterSpacing,
                        fontSize,
                        lineHeight,
                        textWrap: Utils.setTextWrap({ wrap, nowrap, balance })
                    }),
                    ...Utils.setAttributes({
                        color,
                        casing: Utils.setCase({ uppercase, lowercase, capitalize })
                    }),
                    ...props
                },
                children
            )
        }
    )
)

export default Typography
