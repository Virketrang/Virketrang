import { Product } from '../provider/store.provider'

export default abstract class Store {
    public static addProduct(products: Product[], product: Product): Product[] {
        const productOrUndefined = this.getProduct(products, product.id)

        if (!productOrUndefined) return [...products, product]

        return products.map((entry) => (entry.id === product.id ? { ...entry, quantity: entry.quantity + 1 } : entry))
    }

    public static increment(products: Product[], id: string): Product[] {
        const productOrUndefined = this.getProduct(products, id)

        if (!productOrUndefined) throw Error('unable to increment amount, while product is not added to cart.')

        return products.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    }

    public static decrement(products: Product[], id: string): Product[] {
        const productOrUndefined = this.getProduct(products, id)

        if (!productOrUndefined) throw Error('unable to decrement amount, while product is not added to cart.')

        if (productOrUndefined.quantity === 1) return this.removeProduct(products, id)

        return products.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product))
    }

    public static getProduct(products: Product[], id: string): Product | undefined {
        return products.find((product) => product.id === id)
    }

    public static removeProduct(products: Product[], id: string): Product[] {
        const productOrUndefined = this.getProduct(products, id)

        if (!productOrUndefined) return products

        return products.filter((product) => product.id !== id)
    }
}
