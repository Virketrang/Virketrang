import { FilterQuery, ObjectQuery } from '@mikro-orm/core'

import { Product } from '@/app/entities'

export default function sanitizeObject(queryParameters: ObjectQuery<Product>): FilterQuery<Product> {
    return Object.entries(queryParameters)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})
}
