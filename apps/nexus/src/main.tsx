import 'packages/css/preset.css'
import 'packages/css/focus.css'
import 'packages/themes/modern.css'
import 'packages/fonts/montserrat.css'

import '@/styles/fonts.css'

import router from './router'

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </React.StrictMode>
)
