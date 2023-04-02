import { Dialog, Spinner } from '@components/index';
import { Suspense, useState } from 'react';
import { AddProduct, ProductTable } from '@features/index';
import useProductsStyles from './products.component.styles';

const Products = () => {
    const styles = useProductsStyles();
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
            <menu>
                <div className={styles.one}>
                    <h2 className={styles.title}>Produkter</h2>
                    <menu>
                        <li>
                            <button className={styles.menuButton} onClick={() => setOpen(true)}>
                                Tilføj produkt
                            </button>
                        </li>
                    </menu>
                </div>
                <div className={styles.two}>
                    <button className={styles.available}>Tilgængelige</button>
                    <button className={styles.unavailable}>Utilgængelige</button>
                </div>
            </menu>
            <Suspense fallback={<Spinner />}>
                <ProductTable />
            </Suspense>
            <Dialog
                open={open}
                title="Tilføj produkt"
                description="Udfyld venligst nedenstående oplysninger"
                close={() => setOpen(false)}>
                <AddProduct />
            </Dialog>
        </>
    );
};

export default Products;
