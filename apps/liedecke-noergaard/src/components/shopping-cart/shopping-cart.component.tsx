import ShoppingCartComponent from './shopping-cart.component.types';
import { backdrop, cart, header } from './shopping-cart.component.module.sass';

import { Typography } from '@resolut/server';
import { memo } from 'react';

const ShoppingCart: ShoppingCartComponent = ({ open, setOpen }) => {
    return (
        <>
            <aside className={cart} data-state-open={open}>
                <div className={header}>
                    <Typography element="h4" component="heading4">
                        Indkøbskurv
                    </Typography>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 96 960 960"
                        width="32"
                        onClick={() => setOpen(false)}
                        style={{ cursor: 'pointer' }}>
                        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                    </svg>
                </div>
                <ul></ul>
            </aside>
            <div className={backdrop} data-state-open={open}></div>
        </>
    );
};

export default memo(ShoppingCart);
