import type * as Entities from '../../../server/src/app/entities'
import type * as Validation from '../../../server/src/app/validation'

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
        type Create = Validation.Product.Create

        type Update = Partial<Create>
    }

    type Image = Entities.Image

    namespace Image {
        type Create = Omit<Image, 'id' | 'product'>

        type Update = Partial<Create>
    }
}

export default Entity
