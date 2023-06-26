import { Currency } from '@/types'

export default function formatCurrency(dkk: number, currency: Currency) {
    switch (currency) {
        case 'DKK':
            return `${dkk},00 kr.`
        case 'GBP':
            return `£ ${Math.round(dkk / 8)}.00`
        default:
            throw Error('unknown currency: the specified currency is not supported.')
    }
}
