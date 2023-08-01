import '@/css/preset.css'
import '@/css/focus.css'
import '@/themes/modern.css'
import '@/fonts/montserrat.css'
import '@/nexus/styles/fonts.css'

import router from './router'

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </React.StrictMode>
)
