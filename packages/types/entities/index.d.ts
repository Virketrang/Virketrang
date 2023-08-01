import _BaseEntity from './base-entity'
import _Division from './division'
import _Subdivision from './subdivision'
import _Product from './product'
import _Image from './image'
import _Measurement from './measurement'
import _Description from './description'

declare namespace Entity {
    export type BaseEntity = _BaseEntity

    export import Division = _Division

    export import Subdivision = _Subdivision

    export import Product = _Product

    export import Image = _Image

    export type Measurement = _Measurement

    export type Description = _Description
}

export default Entity
