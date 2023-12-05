import { QwikIntrinsicElements, component$ } from '@builder.io/qwik'

export default component$(
    <C extends keyof QwikIntrinsicElements>({
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
        element,
        'class': className,
        ...props
    }: Resolut.Component.BaseProps<C>) => {
        const _ = {
            ...props,
            style: Utils.setInlineStyles({
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
                ...(style as Resolut.CSSProperties)
            }),
            class: Utils.setClasses(className, `resolut-${tag}`, 'resolut'),
            ...Utils.setAttributes({ stretch: row || column ? true : stretch, unselectable })
        }

        switch (element) {
            case 'input':
                return <input {..._} />
            case 'select':
                return <select {..._} />
            case 'textarea':
                return <textarea {..._} />
            case 'article':
                return (
                    <article {..._}>
                        <Slot />
                    </article>
                )
            case 'aside':
                return (
                    <aside {..._}>
                        <Slot />
                    </aside>
                )
            case 'details':
                return (
                    <details {..._}>
                        <Slot />
                    </details>
                )
            case 'figcaption':
                return (
                    <figcaption {..._}>
                        <Slot />
                    </figcaption>
                )
            case 'figure':
                return (
                    <figure {..._}>
                        <Slot />
                    </figure>
                )
            case 'body':
                return (
                    <body {..._}>
                        <Slot />
                    </body>
                )
            case 'h1':
                return (
                    <h1 {..._}>
                        <Slot />
                    </h1>
                )
            case 'h2':
                return (
                    <h2 {..._}>
                        <Slot />
                    </h2>
                )
            case 'h3':
                return (
                    <h3 {..._}>
                        <Slot />
                    </h3>
                )
            case 'h4':
                return (
                    <h4 {..._}>
                        <Slot />
                    </h4>
                )
            case 'h5':
                return (
                    <h5 {..._}>
                        <Slot />
                    </h5>
                )
            case 'h6':
                return (
                    <h6 {..._}>
                        <Slot />
                    </h6>
                )
            case 'main':
                return (
                    <main {..._}>
                        <Slot />
                    </main>
                )
            case 'nav':
                return (
                    <nav {..._}>
                        <Slot />
                    </nav>
                )
            case 'section':
                return (
                    <section {..._}>
                        <Slot />
                    </section>
                )
            case 'form':
                return (
                    <form {..._}>
                        <Slot />
                    </form>
                )
            case 'label':
                return (
                    <label {..._}>
                        <Slot />
                    </label>
                )
            case 'button':
                return (
                    <button {..._}>
                        <Slot />
                    </button>
                )
            case 'a':
                return (
                    <a {..._}>
                        <Slot />
                    </a>
                )
            case 'span':
                return (
                    <span {..._}>
                        <Slot />
                    </span>
                )
            case 'p':
                return (
                    <p {..._}>
                        <Slot />
                    </p>
                )
            case 'div':
                return (
                    <div {..._}>
                        <Slot />
                    </div>
                )
            case 'header':
                return (
                    <header {..._}>
                        <Slot />
                    </header>
                )
            case 'footer':
                return (
                    <footer {..._}>
                        <Slot />
                    </footer>
                )
            default:
                return (
                    <div {..._}>
                        <Slot />
                    </div>
                )
        }
    }
)
