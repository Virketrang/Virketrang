import OptionComponent from './option.component.types'

const Option: OptionComponent = memo(({ ...props }) => {
    return <option {...props} />
})

Option.displayName = Option.name

export default Option
