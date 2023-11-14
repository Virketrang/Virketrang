import { Dynamic } from 'solid-js/web'
import { Resolut } from '../../framework'

import Utils from '../../../../../utils'
import BaseComponent, { BaseProps } from './base.component.types'

const Base: BaseComponent = Resolut.create<HTMLElement, BaseProps>(
    ({
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

        text,
        none,
        auto,
        contextMenu,
        wait,
        help,
        progress,
        cell,
        crosshair,
        verticalText,
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
        ref,
        zoomOut,
        tag,
        style,
        class: className,
        children,
        ...props
    }) => {
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
                            text,
                            none,
                            auto,
                            contextMenu,
                            wait,
                            help,
                            progress,
                            cell,
                            crosshair,
                            verticalText,
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
            />
        )
    }
)

export default Base
