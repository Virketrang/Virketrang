import { DarkMode, LightMode } from '@/nexus/client/assets'

import ThemeSwitchComponent from './theme-switch.component.types'

const ThemeSwitch: ThemeSwitchComponent = memo(() => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const handleClick = (theme: 'light' | 'dark') => {
        document.body.parentElement?.setAttribute('data-theme', theme)
        setTheme(theme)
    }

    if (theme === 'light')
        return (
            <button onClick={() => handleClick('dark')}>
                <LightMode />
            </button>
        )
    else
        return (
            <button onClick={() => handleClick('light')}>
                <DarkMode />
            </button>
        )
})

ThemeSwitch.displayName = ThemeSwitch.name

export default ThemeSwitch
