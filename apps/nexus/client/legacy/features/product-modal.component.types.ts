export interface ProductModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type ProductModalComponent = React.FunctionComponent<ProductModalProps>

export default ProductModalComponent
