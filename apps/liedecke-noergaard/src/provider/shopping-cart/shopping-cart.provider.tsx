import { useState } from 'react';

import { ShoppingCartContext } from '@context';
import { ShoppingCart } from '@components';
import { useLocalStorage } from '@hooks';
import { CartItem } from '@types';

import ShoppingCartProvider from './shopping-cart.provider.types';

const ShoppingCartProvider: ShoppingCartProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

    const cartQuantity = items.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setOpen(true);

    const closeCart = () => setOpen(false);

    const getItemQuantity = (id: number) => items.find(item => item.id === id)?.quantity || 0;

    const increaseCartQuantity = (id: number) =>
        setItems(currentItems => {
            if (currentItems.find(item => item.id === id) === null) return [...currentItems, { id, quantity: 1 }];
            else
                return currentItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity };
                    else return item;
                });
        });

    const decreaseCartQuantity = (id: number) =>
        setItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1)
                return currentItems.filter(item => item.id !== id);
            else
                return currentItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity - 1 };
                    else return item;
                });
        });

    const removeFromCart = (id: number) => setItems(currentItems => currentItems.filter(item => item.id !== id));

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartQuantity,
                cartItems: items,
            }}>
            {children}
            <ShoppingCart open={open} setOpen={setOpen} />
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
