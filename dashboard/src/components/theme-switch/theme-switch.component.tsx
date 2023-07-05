import { DarkMode, LightMode } from '@/assets'

import ThemeSwitchComponent from './theme-switch.component.types'

const ThemeSwitch: ThemeSwitchComponent = memo(() => {
    const [theme, setTheme] = useState(false)

    if (!theme)
        return (
            <button onClick={() => setTheme(true)}>
                <LightMode />
            </button>
        )
    else
        return (
            <button onClick={() => setTheme(false)}>
                <DarkMode />
            </button>
        )
})

ThemeSwitch.displayName = ThemeSwitch.name

export default ThemeSwitch
