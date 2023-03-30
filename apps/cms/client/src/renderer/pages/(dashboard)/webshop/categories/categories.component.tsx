import { Suspense, useState } from 'react';

import { Dialog, Spinner } from '@components/index';
import { AddCategory, CategoryTable } from '@features/index';

import useCategoriesStyles from './categories.component.styles';

const Categories = () => {
    const styles = useCategoriesStyles();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <menu>
                <div className={styles.one}>
                    <h2 className={styles.title}>Kategorier</h2>
                    <menu>
                        <li>
                            <button className={styles.menuButton} onClick={() => setOpen(true)}>
                                Tilføj Kategori
                            </button>
                        </li>
                    </menu>
                </div>
            </menu>
            <Suspense fallback={<Spinner />}>
                <CategoryTable />
            </Suspense>
            <Dialog
                open={open}
                title="Tilføj kategori"
                description="Udfyld venligst nedenstående oplysninger"
                close={() => setOpen(false)}>
                <AddCategory />
            </Dialog>
        </>
    );
};

export default Categories;
