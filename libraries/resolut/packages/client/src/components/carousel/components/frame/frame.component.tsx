import CarouselFrameComponent from './frame.component.types'
import styles from './frame.component.module.sass'

import { NotARefObjectError, NoElementReferencedError } from '../../../../errors'

const CarouselFrame: CarouselFrameComponent = memo(
    forwardRef(
        (
            { className = '', style, children, onMouseDown, onMouseLeave, onMouseMove, onMouseUp, ...props },
            forwardedRef
        ) => {
            if (typeof forwardedRef === 'function') throw new NotARefObjectError()

            const carousel = createRef<HTMLDivElement>()
            const dragging = useRef(false)
            const startX = useRef<number>()
            const scrollLeft = useRef<number>()

            const childCount = useMemo(() => Children.count(children), [children])

            const classNames = `${styles.frame} ${className}`

            const dynamicStyles = { '--slides': childCount }

            const mouseDown = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    onMouseDown && onMouseDown(event)
                    if (!carousel.current) return

                    carousel.current.style.scrollSnapType = 'none'
                    dragging.current = true

                    startX.current = event.pageX - carousel.current.offsetLeft
                    scrollLeft.current = carousel.current.scrollLeft || 0
                },
                [onMouseDown, carousel]
            )

            const mouseMove = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    onMouseMove && onMouseMove(event)
                    if (!dragging.current) return
                    if (!carousel.current) return
                    if (!startX.current) throw Error('No starting x-value exists')
                    if (!scrollLeft.current && scrollLeft.current !== 0) throw Error('No scrollLeft value exists')

                    event.preventDefault()

                    const xPositionWithinCarousel = event.pageX - carousel.current.offsetLeft
                    const distancedDragged = xPositionWithinCarousel - startX.current
                    carousel.current.scrollTo({ left: scrollLeft.current - distancedDragged })
                },
                [onMouseMove, carousel]
            )

            const mouseUpOrLeave = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    if (!carousel.current) return

                    carousel.current.style.scrollSnapType = 'x mandatory'

                    dragging.current = false
                },
                [carousel]
            )

            return (
                <div
                    className={classNames}
                    style={{ ...style, ...dynamicStyles }}
                    {...props}
                    ref={carousel}
                    onMouseDown={mouseDown}
                    onMouseUp={(event) => {
                        onMouseUp && onMouseUp(event)
                        mouseUpOrLeave(event)
                    }}
                    onMouseLeave={(event) => {
                        onMouseLeave && onMouseLeave(event)
                        mouseUpOrLeave(event)
                    }}
                    onMouseMove={mouseMove}
                >
                    {children}
                </div>
            )
        }
    )
)

export default CarouselFrame
