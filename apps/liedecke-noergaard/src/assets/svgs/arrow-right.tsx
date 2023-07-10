const ArrowRight: React.FunctionComponent<React.ComponentProps<'svg'>> = memo(
    ({ height = 24, width = 24, ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props} height={height} width={width}>
                <path d="m564.077-268.923-22.231-21.231 175.692-175.692H183.846v-30.769h533.692L541.615-672.539l22.231-21.23 212.539 212.538-212.308 212.308Z" />
            </svg>
        )
    }
)

ArrowRight.displayName = 'ArrowRight'

export default ArrowRight
