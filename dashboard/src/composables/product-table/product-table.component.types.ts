import { Entity } from '@packages/interfaces'
import { FunctionComponent } from 'react'

interface ProductTableProps {
    data: Entity.Product[]
}

type ProductTableComponent = FunctionComponent<ProductTableProps>

export default ProductTableComponent
