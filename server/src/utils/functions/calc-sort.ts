import { SORTING_OPTION } from '@packages/enums'

export default function calcSort(sortingOption: SORTING_OPTION): any {
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
