import '@packages/styles/preset.css'
import '@packages/styles/focus.css'

import '@/styles/theme.css'
import '@/styles/fonts.css'

import router from './router'

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </React.StrictMode>
)
