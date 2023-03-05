import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Item } from '@interfaces/index';

import { Authentication, Dashboard } from '@layouts/index';

import { Products, Discounts, Categories, Login } from '@pages/index';

const items: Item[] = [
    { path: 'webshop/products', name: 'Alle Produkter' },
    { path: 'webshop/categories', name: 'Kategorier' },
    { path: 'webshop/discounts', name: 'Tilbud' },
];

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Authentication />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<Dashboard title="Produkter" items={items} />}>
                    <Route path="webshop/products" element={<Products />} />
                    <Route path="webshop/discounts" element={<Discounts />} />
                    <Route path="webshop/categories" element={<Categories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
