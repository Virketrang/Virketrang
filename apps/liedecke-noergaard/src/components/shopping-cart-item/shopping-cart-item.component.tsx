import ShoppingCartItemComponent from './shopping-cart-item.component.types';
import styles from './shopping-cart-item.component.module.sass';
import { memo } from 'react';

const ShoppingCartItem: ShoppingCartItemComponent = () => {
    return <li className={styles.base}></li>;
};

export default memo(ShoppingCartItem);
