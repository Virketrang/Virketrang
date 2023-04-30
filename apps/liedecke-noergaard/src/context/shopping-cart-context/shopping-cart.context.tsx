import { createContext } from 'react';

import ShoppingCartContext from './shopping-cart-context.types';

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export default ShoppingCartContext;
