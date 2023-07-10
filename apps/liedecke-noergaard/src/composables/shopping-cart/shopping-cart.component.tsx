'use client'
import Image from 'next/image'

import { useStore } from '@/common/hooks'
import { Close } from '@/assets/svgs'
import { Currency } from '@/common/utils'
import { ModalHeader, QuantityIndicator } from '@/components'

import ShoppingCartComponent from './shopping-cart.types'
import styles from './shopping-cart.module.scss'

const ShoppingCart: ShoppingCartComponent = memo(({ dictionaries, locale }) => {
    const { state, dispatch } = useStore()

    const handleClick = () => dispatch({ type: 'CLOSE_SHOPPING_CART' })

    const handleDelete = (id: string) => () => dispatch({ type: 'REMOVE', payload: id })

    return (
        <aside data-open={state.shoppingCart.open} className={styles.cart}>
            <ModalHeader title={dictionaries.shoppingCart.title} onClick={handleClick} />
            <ul className={styles.list}>
                {state.shoppingCart.products &&
                    state.shoppingCart.products.map(({ id, image, name, materials, price, quantity }) => (
                        <li key={id} className={styles.product}>
                            <Image src={image.src} alt={image.alt} width={96} height={96} />
                            <div className={styles.details}>
                                <h4>{name}</h4>
                                <p>{materials}</p>
                            </div>
                            <div className={styles.actions}>
                                <span className={styles.amount}>
                                    {Currency.numberToCurrency(
                                        price,
                                        dictionaries.currency === 'DKK' ? 'DKK' : 'GBP',
                                        locale
                                    )}
                                </span>
                                <QuantityIndicator
                                    dictionary={{ pieces: dictionaries.shoppingCart.pieces }}
                                    id={id}
                                    quantity={quantity}
                                />
                                <button onClick={handleDelete(id)} className={styles.remove}>
                                    {dictionaries.shoppingCart.remove}
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>

            <div className={styles.total}>
                <h4>{dictionaries.shoppingCart.total}</h4>
                <span>
                    {Currency.numberToCurrency(
                        state.shoppingCart.products.reduce(
                            (currentValue, product) => currentValue + product.price * product.quantity,
                            0
                        ),
                        dictionaries.currency === 'DKK' ? 'DKK' : 'GBP',
                        locale
                    )}
                </span>
            </div>
            <div className={styles.terms}>
                <input name="user-consent" id="user-consent" type="checkbox" />
                <span>
                    {`${dictionaries.shoppingCart.acceptance} `}
                    <Link href="">{dictionaries.shoppingCart.termsAndConditionsOfSale}</Link>
                    {` ${dictionaries.shoppingCart.and} `}
                    <Link href="">{dictionaries.shoppingCart.privacyPolicy}</Link>
                </span>
            </div>
            <Link className={styles.checkout} href="">
                {dictionaries.shoppingCart.checkout}
            </Link>
        </aside>
    )
})

ShoppingCart.displayName = 'ShoppingCart'

export default ShoppingCart
