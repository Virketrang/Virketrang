import _BaseEntity from './base-entity'
import _Division from './division'
import _Subdivision from './subdivision'
import _Product from './product'
import _Image from './image'
import _Measurement from './measurement'
import _Description from './description'
import _Customer from './customer'
import _Order from './order'

declare namespace Entity {
    // ABSTRACT
    export interface BaseEntity extends _BaseEntity {}

    export interface Measurement extends _Measurement {}

    export interface Description extends _Description {}

    // ENTITIES
    export import Division = _Division

    export import Subdivision = _Subdivision

    export import Product = _Product

    export import Image = _Image

    export import Customer = _Customer

    export import Order = _Order
}

export default Entity
