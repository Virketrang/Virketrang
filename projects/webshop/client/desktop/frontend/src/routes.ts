import { Routes } from '@angular/router';

import { LandingPageComponent } from './app/pages/landing-page/landing-page.component';

import { LoginComponent } from './app/pages/login/login.component';

import { DashboardComponent } from './app/pages/dashboard/dashboard.component';

import { OrdersComponent } from './app/pages/dashboard/orders/orders.component';
import { WebshopComponent } from './app/pages/dashboard/webshop/webshop.component';
import { CategoriesComponent } from './app/pages/dashboard/webshop/categories/categories.component';
import { DiscountsComponent } from './app/pages/dashboard/webshop/discounts/discounts.component';
import { ProductsComponent } from './app/pages/dashboard/webshop/products/products.component';
import { AccountingComponent } from './app/pages/dashboard/accounting/accounting.component';
import { CustomersComponent } from './app/pages/dashboard/customers/customers.component';
import { EmployeesComponent } from './app/pages/dashboard/employees/employees.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'orders', component: OrdersComponent },
            {
                path: 'webshop',
                component: WebshopComponent,
                children: [
                    { path: 'products', component: ProductsComponent },
                    { path: 'categories', component: CategoriesComponent },
                    { path: 'discounts', component: DiscountsComponent },
                ],
            },
            { path: 'accounting', component: AccountingComponent },
            { path: 'customers', component: CustomersComponent },
            { path: 'employees', component: EmployeesComponent },
        ],
    },
];
