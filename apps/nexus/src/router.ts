import AppLayout from '@/app/layout'
import ProductLayout from '@/app/products/layout'

import Overview from '@/app/overview/page'
import Orders from '@/app/orders/page'
import Employees from '@/app/employees/page'
import Website from '@/app/website/page'
import Accounting from '@/app/accounting/page'
import Customers from '@/app/customers/page'

import Products from '@/app/products/products/page'
import Categories from '@/app/products/divisions/page'
import Materials from '@/app/products/materials/page'

import Error from './app/error'

const router = createBrowserRouter([
    {
        Component: AppLayout,
        errorElement: createElement(Error),
        children: [
            { path: '/', Component: Overview },
            { path: '/orders', Component: Orders },
            {
                Component: ProductLayout,
                children: [
                    { path: '/products', Component: Products },
                    { path: '/products/divisions', Component: Categories },
                    { path: '/products/materials', Component: Materials }
                ]
            },
            { path: '/employees', Component: Employees },
            { path: '/website', Component: Website },
            { path: '/accounting', Component: Accounting },
            { path: '/customers', Component: Customers }
        ]
    }
])

export default router
