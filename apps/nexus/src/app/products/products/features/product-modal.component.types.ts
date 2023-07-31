import { ComponentPropsWithoutRef, Dispatch, FunctionComponent, SetStateAction } from 'react'

export interface ProductModalProps extends ComponentPropsWithoutRef<'dialog'> {
    setOpen: Dispatch<SetStateAction<boolean>>
}

type ProductModalComponent = FunctionComponent<ProductModalProps>

export default ProductModalComponent
