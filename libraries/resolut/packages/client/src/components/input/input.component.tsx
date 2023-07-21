const Input: Resolut.Input.Component = memo(
    forwardRef(({ ...props }, forwardedRef) => {
        return <input {...props} ref={forwardedRef} />
    })
)

export default Input
