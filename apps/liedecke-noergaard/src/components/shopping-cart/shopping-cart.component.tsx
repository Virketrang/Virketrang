import { memo } from 'react';

import { Typography, Drawer, Button, Flex } from '@resolut/server';

import { Close } from '@icons';

import ShoppingCartComponent from './shopping-cart.component.types';
import styles from './shopping-cart.component.module.sass';

const ShoppingCart: ShoppingCartComponent = memo(({ open, setOpen }) => {
    return (
        <>
            <Drawer open={open}>
                <Flex justifyContent="space-between" height="6rem" className={styles.header}>
                    <Typography element="h4" variant="subtitle2">
                        Indkøbskurv
                    </Typography>
                    <Button backgroundColor="transparent" icon={<Close />} onClick={() => setOpen(false)} />
                </Flex>
                <ul></ul>
            </Drawer>
        </>
    );
});

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;
