import * as Entities from '../../../server/src/app/entities'
import CreateProductDTO from '../../../server/src/app/modules/products/dto/create-product.dto'

declare namespace Entity {
    type Division = Entities.Division

    namespace Division {
        type Create = Omit<Division, 'id' | 'subdivisions'>

        type Update = Partial<Create>

        type Retrieve = Omit<Division, 'subdivisions'> & { subdivisions: Subdivision[] }
    }

    type Subdivision = Entities.Subdivision

    namespace Subdivision {
        type Create = Omit<Subdivision, 'id'>

        type Update = Partial<Create>
    }

    type Product = Entities.Product

    namespace Product {
        type Create = CreateProductDTO

        type Update = Partial<Create>
    }

    type Image = Entities.Image

    namespace Image {
        type Create = Omit<Image, 'id' | 'product'>

        type Update = Partial<Create>
    }
}

export default Entity
