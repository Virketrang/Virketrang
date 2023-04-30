import { useContext } from 'react';

import { ShoppingCartContext } from '@context';

export default function useShoppingCartContext() {
    return useContext(ShoppingCartContext);
}
