import { Interfaces } from '@packages/index'
import { FunctionComponent } from 'react'

interface ProductTableProps {
    data: Interfaces.Entity.Product[]
}

type ProductTableComponent = FunctionComponent<ProductTableProps>

export default ProductTableComponent
