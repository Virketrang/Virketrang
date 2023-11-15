import Input from '../input/input.component'

const Select = Resolut.create<HTMLSelectElement, Resolut.Component.SelectProps>(
    ({ options, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Input tag="select" element="select" ref={ref} {...props}>
                {options &&
                    options.map(({ value, name }) => (
                        <option
                            /** @inject class="resolut-option" **/
                            value={value}
                            /** @remove start **/
                            key={name + value}
                            className="resolut-option"
                            /** @remove end **/
                        >
                            {name}
                        </option>
                    ))}
            </Input>
        )
    }
)

export default Select
