import { Resolut } from '../../framework'
import { BaseComponent, BaseProps } from './base.component.types'

const Base: BaseComponent = Resolut.create<HTMLElement, BaseProps>(
    (
        {
            margin,
            padding,
            minHeight,
            minWidth,
            maxHeight,
            maxWidth,
            width,
            height,
            row,
            column,
            stretch,
            unselectable,
            element,
            pointer,
            grab,
            grabbing,
            browserdefault,
            text,
            none,
            auto,
            contextMenu,
            wait,
            help,
            progress,
            cell,
            crosshair,
            verticaltext,
            alias,
            copy,
            move,
            noDrop,
            notAllowed,
            allScroll,
            colResize,
            rowResize,
            nResize,
            eResize,
            sResize,
            wResize,
            neResize,
            nwResize,
            seResize,
            swResize,
            ewResize,
            nsResize,
            neswResize,
            nwseResize,
            zoomIn,
            zoomOut,
            tag,
            style,
            class: className,
            children,
            /** @inject ref, **/
            ...props
        } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        return (
            <Dynamic
                component={element}
                style={Utils.setInlineStyles({
                    ...Utils.setCSSVariables({
                        margin,
                        padding,
                        minHeight,
                        minWidth,
                        maxHeight,
                        maxWidth,
                        height,
                        width: stretch ? '100%' : width,
                        gridRow: Utils.setGrid(row),
                        gridColumn: Utils.setGrid(stretch ? 'span-all' : column),
                        cursor: Utils.setValueFromBoolean({
                            pointer,
                            grab,
                            grabbing,
                            browserdefault,
                            text,
                            none,
                            auto,
                            contextMenu,
                            wait,
                            help,
                            progress,
                            cell,
                            crosshair,
                            verticaltext,
                            alias,
                            copy,
                            move,
                            noDrop,
                            notAllowed,
                            allScroll,
                            colResize,
                            rowResize,
                            nResize,
                            eResize,
                            sResize,
                            wResize,
                            neResize,
                            nwResize,
                            seResize,
                            swResize,
                            ewResize,
                            nsResize,
                            neswResize,
                            nwseResize,
                            zoomIn,
                            zoomOut
                        })
                    }),
                    ...style
                })}
                className={Utils.setClasses(className, `resolut resolut-${tag}`)}
                ref={ref}
                {...Utils.setAttributes({ stretch: row || column ? true : stretch, unselectable })}
                {...props}
            >
                {children}
            </Dynamic>
        )
    }
)

export default Base
