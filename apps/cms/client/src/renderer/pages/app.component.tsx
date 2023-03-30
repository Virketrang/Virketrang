import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JssProvider } from 'react-jss';
import { Authentication, Dashboard } from '@layouts/index';
import { Products, Discounts, Categories, Login, Employees, Templates } from '@pages/index';

import sheets from './app.component.styles';

const App = () => {
    return (
        <JssProvider registry={sheets}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Authentication />}>
                        <Route index element={<Login />} />
                    </Route>
                    <Route
                        element={
                            <Dashboard
                                title="Produkter"
                                items={[
                                    { path: 'webshop/products', name: 'Alle Produkter' },
                                    { path: 'webshop/categories', name: 'Kategorier' },
                                    { path: 'webshop/discounts', name: 'Tilbud' },
                                ]}
                            />
                        }>
                        <Route path="webshop/products" element={<Products />} />
                        <Route path="webshop/discounts" element={<Discounts />} />
                        <Route path="webshop/categories" element={<Categories />} />
                    </Route>
                    <Route
                        element={
                            <Dashboard
                                title="medarbejdere"
                                items={[
                                    { path: 'employees/employees', name: 'Ansatte' },
                                    { path: 'employees/templates', name: 'Skabeloner' },
                                ]}
                            />
                        }>
                        <Route path="employees/employees" element={<Employees />} />
                        <Route path="employees/templates" element={<Templates />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </JssProvider>
    );
};

export default App;
