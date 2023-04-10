import ProductMenuComponent from './product-menu.component.types';
import useProductMenuStyles from './product-menu.component.styles';

import { Button } from '@resolut/react';

const ProductMenu: ProductMenuComponent = ({ setOpen }) => {
    const styles = useProductMenuStyles();

    return (
        <menu>
            <div className={styles.one}>
                <h2 className={styles.title}>Produkter</h2>
                <menu>
                    <li>
                        <Button shape="rounded" onClick={() => setOpen(true)}>
                            Tilføj produkt
                        </Button>
                    </li>
                </menu>
            </div>
            <div className={styles.two}>
                <button className={styles.available}>Tilgængelige</button>
                <button className={styles.unavailable}>Utilgængelige</button>
            </div>
        </menu>
    );
};

export default ProductMenu;
