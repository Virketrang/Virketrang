import { QueryOrderMap } from '@mikro-orm/core'

import { SORTING_OPTION } from '@packages/enums'
import { Product } from '@/app/entities'

export default function calcSort(sortingOption: SORTING_OPTION): QueryOrderMap<Product> {
    switch (sortingOption) {
        case SORTING_OPTION.ALPHABETICALLY:
            return { name: 'ASC' }
        case SORTING_OPTION.MOST_RECENT:
            return { createdAt: 'ASC' }
        case SORTING_OPTION.PRICE_ASSENDING:
            return { retailPrice: 'ASC' }
        case SORTING_OPTION.PRICE_DECENDING:
            return { retailPrice: 'DESC' }
        default:
            return { createdAt: 'ASC' }
    }
}
