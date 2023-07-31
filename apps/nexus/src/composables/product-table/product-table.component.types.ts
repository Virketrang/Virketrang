import Interfaces from 'packages/types/interfaces'
import { FunctionComponent } from 'react'

interface ProductTableProps {
    data: Interfaces.Entity.Product[]
}

type ProductTableComponent = FunctionComponent<ProductTableProps>

export default ProductTableComponent
