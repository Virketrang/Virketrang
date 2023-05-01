import { memo } from 'react';

import ShoppingCartItemComponent from './shopping-cart-item.component.types';
import styles from './shopping-cart-item.component.module.sass';

const ShoppingCartItem: ShoppingCartItemComponent = memo(() => {
    return <li className={styles.base}></li>;
});

ShoppingCartItem.displayName = 'ShoppingCartItem';

export default ShoppingCartItem;
