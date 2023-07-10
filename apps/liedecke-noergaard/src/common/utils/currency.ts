import { Currency as ICurrency, Locale } from '@/types'

export default abstract class Currency {
    public static numberToCurrency(dkk: number, currency: ICurrency, locale: Locale): string {
        let value = locale === 'en-GB' ? dkk * 8 : dkk
        console.log(dkk)
        return Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
    }

    public static currencyToNumber(value: string): number {
        console.log(value)
        const number = parseInt(value.replace(/[\.,](?=.*[\.,])/, ''))
        console.log(number)
        return number
    }
}
