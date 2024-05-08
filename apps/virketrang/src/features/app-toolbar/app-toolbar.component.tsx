'use client'
import Image from 'next/image'

import DefaultTheme from '../../../public/brightness.png'
import LightTheme from '../../../public/sun.png'
import DarkTheme from '../../../public/moon.png'

import { styles, AppToolbarComponent } from '../app-toolbar'
import { LocaleSwitch } from '@/website/components'

const AppToolbar: AppToolbarComponent = ({ locale }) => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'default'>('default')

    useEffect(() => {
        document.body.parentElement?.setAttribute('data-theme', theme)
    }, [theme])

    const changeTheme = () => {
        if (theme === 'default') return setTheme('light')
        if (theme === 'light') return setTheme('dark')
        if (theme === 'dark') return setTheme('default')
    }

    return (
        <div className={styles.toolbar}>
            {/* <LocaleSwitch locale={locale} />
            <button onClick={changeTheme}>
                {theme === 'default' && <Image width={24} height={24} alt="Default Theme" src={DefaultTheme.src} />}
                {theme === 'light' && <Image width={24} height={24} alt="Light Theme" src={LightTheme.src} />}
                {theme === 'dark' && <Image width={24} height={24} alt="Dark Theme" src={DarkTheme.src} />}
            </button> */}
        </div>
    )
}

export default AppToolbar
