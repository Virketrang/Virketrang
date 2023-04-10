import { Suspense, useState } from 'react';
import { ProductMenu, ProductModal, ProductTable } from './features';

import { Spinner } from '@components/index';

const Products = () => {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
            <ProductMenu setOpen={setOpen} />
            <Suspense fallback={<Spinner />}>
                <ProductTable />
            </Suspense>
            <ProductModal open={open} />
        </>
    );
};

export default Products;
