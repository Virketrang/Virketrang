const CreateCurrencySchema = z.object({
    currency_name: z.string(),
    currency_code: z.string(),
    currency_symbol: z.string()
})

export default abstract class CurrencyValidation {
    public static create = CreateCurrencySchema
}
