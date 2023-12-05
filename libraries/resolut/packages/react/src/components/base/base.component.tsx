const Base = Resolut.create<HTMLElement, Resolut.Component.BaseProps>(
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
            'cursor:pointer': cursorPointer,
            'cursor:grab': cursorGrab,
            'cursor:grabbing': cursorGrabbing,
            'cursor:default': cursorBrowserDefault,
            'cursor:text': cursorText,
            'cursor:none': cursorNone,
            'cursor:auto': cursorAuto,
            'cursor:contextMenu': cursorContextMenu,
            'cursor:wait': cursorWait,
            'cursor:help': cursorHelp,
            'cursor:progress': cursorProgress,
            'cursor:cell': cursorCell,
            'cursor:crosshair': cursorCrosshair,
            'cursor:verticalText': cursorVerticalText,
            'cursor:alias': cursorAlias,
            'cursor:copy': cursorCopy,
            'cursor:move': cursorMove,
            'cursor:noDrop': cursorNoDrop,
            'cursor:notAllowed': cursorNotAllowed,
            'cursor:allScroll': cursorAllScroll,
            'cursor:colResize': cursorColResize,
            'cursor:rowResize': cursorRowResize,
            'cursor:nResize': cursorNResize,
            'cursor:eResize': cursorEResize,
            'cursor:sResize': cursorSResize,
            'cursor:wResize': cursorWResize,
            'cursor:neResize': cursorNeResize,
            'cursor:nwResize': cursorNwResize,
            'cursor:seResize': cursorSeResize,
            'cursor:swResize': cursorSwResize,
            'cursor:ewResize': cursorEwResize,
            'cursor:nsResize': cursorNsResize,
            'cursor:neswResize': cursorNeswResize,
            'cursor:nwseResize': cursorNwseResize,
            'cursor:zoomIn': cursorZoomIn,
            'cursor:zoomOut': cursorZoomOut,
            tag,
            style,
            'class': className,
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
                            cursorPointer,
                            cursorGrab,
                            cursorGrabbing,
                            cursorBrowserDefault,
                            cursorText,
                            cursorNone,
                            cursorAuto,
                            cursorContextMenu,
                            cursorWait,
                            cursorHelp,
                            cursorProgress,
                            cursorCell,
                            cursorCrosshair,
                            cursorVerticalText,
                            cursorAlias,
                            cursorCopy,
                            cursorMove,
                            cursorNoDrop,
                            cursorNotAllowed,
                            cursorAllScroll,
                            cursorColResize,
                            cursorRowResize,
                            cursorNResize,
                            cursorEResize,
                            cursorSResize,
                            cursorWResize,
                            cursorNeResize,
                            cursorNwResize,
                            cursorSeResize,
                            cursorSwResize,
                            cursorEwResize,
                            cursorNsResize,
                            cursorNeswResize,
                            cursorNwseResize,
                            cursorZoomIn,
                            cursorZoomOut
                        })
                    }),
                    ...style
                })}
                className={Utils.setClasses(className, `resolut-${tag}`, 'resolut')}
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
