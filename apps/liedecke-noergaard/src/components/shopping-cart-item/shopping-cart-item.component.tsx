import ShoppingCartItemComponent from './shopping-cart-item.component.types';
import { base } from './shopping-cart-item.component.module.sass';
import { memo } from 'react';

const ShoppingCartItem: ShoppingCartItemComponent = () => {
    return <li className={base}></li>;
};

export default memo(ShoppingCartItem);
