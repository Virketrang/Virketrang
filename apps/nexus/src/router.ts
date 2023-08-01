import AppLayout from '@/nexus/app/layout'
import ProductLayout from '@/nexus/app/products/layout'

import Overview from '@/nexus/app/overview/page'
import Orders from '@/nexus/app/orders/page'
import Employees from '@/nexus/app/employees/page'
import Website from '@/nexus/app/website/page'
import Accounting from '@/nexus/app/accounting/page'
import Customers from '@/nexus/app/customers/page'

import Products from '@/nexus/app/products/products/page'
import Categories from '@/nexus/app/products/divisions/page'
import Materials from '@/nexus/app/products/materials/page'

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
