/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--primary-background-color)',
                secondary: 'var(--secondary-background-color)',
                tertiary: 'var(--tertiary-background-color)'
            },
            colors: {
                primary: 'var(--primary-text-color)',
                secondary: 'var(--secondary-text-color)',
                tertiary: 'var(--tertiary-text-color)'
            },
            boxShadow: {
                DEFAULT: '0 0 1px 1px rgba(0, 0, 0, 0.1)'
            }
        }
    },
    plugins: []
}
