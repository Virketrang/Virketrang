import { THIRTY_DAYS_IN_MILLISECONDS } from '../constants'

const now = new Date().getTime()

export default function isProductNew(date: Date): boolean {
    const difference = now - date.getTime()
    return difference <= THIRTY_DAYS_IN_MILLISECONDS
}
