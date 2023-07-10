'use client'
import { Menu } from '@/assets'
import { useStore } from '@/common'

import styles from './menu-button.module.scss'
import MenuButtonComponent from './menu-button.types'

const MenuButton: MenuButtonComponent = memo(() => {
    const { dispatch } = useStore()

    const handleClick = () => dispatch({ type: 'OPEN_SIDEBAR' })

    return (
        <button className={styles.menu} onClick={handleClick}>
            <Menu />
        </button>
    )
})

MenuButton.displayName = 'MenuButton'

export default MenuButton
