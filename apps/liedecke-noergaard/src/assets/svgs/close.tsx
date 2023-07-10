'use client'
type CloseComponent = React.FunctionComponent<{ onClick?: () => void }>

const Close: CloseComponent = memo(({ onClick = () => null }) => {
    return (
        <svg
            role="button"
            style={{ cursor: 'pointer' }}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
            onClick={onClick}
        >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
    )
})

Close.displayName = 'Close'

export default Close
