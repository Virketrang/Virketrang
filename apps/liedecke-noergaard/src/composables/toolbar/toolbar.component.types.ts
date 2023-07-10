type ToolbarComponent = FunctionComponent<{
    sortBy: string
    setSortBy: Dispatch<SetStateAction<string>>
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}>

export default ToolbarComponent
