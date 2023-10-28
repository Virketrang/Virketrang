import Utils from '../../utils'
import BaseComponent from './base.component.types'

const Base: BaseComponent = memo(
    forwardRef(
        (
            {
                margin,
                padding,
                minHeight,
                minWidth,
                width,
                height,
                row,
                column,
                stretch = false,
                element,
                tag,
                style,
                className,
                children,
                ...props
            },
            ref
        ) => {
            return createElement(
                element,
                {
                    style: Utils.setInlineStyles({
                        margin,
                        padding,
                        minHeight,
                        minWidth,
                        height,
                        width: stretch ? '100%' : width,
                        gridRow: Utils.evaluateGrid(row),
                        gridColumn: Utils.evaluateGrid(stretch ? 'span-all' : column)
                    }),
                    className: Utils.setClasses(className, `resolut-${tag}`),
                    ref,
                    ...Utils.setAttributes({ stretch: row !== 'unset' || column !== 'unset' ? true : stretch }),
                    ...props
                },
                children
            )
        }
    )
)

export default Base
