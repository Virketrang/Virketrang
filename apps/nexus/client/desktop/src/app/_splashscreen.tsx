import { useEffect } from 'react'
import { Logo } from '../components'
import { invoke } from '@tauri-apps/api/tauri'

const SplashScreen = () => {
    useEffect(() => {
        setTimeout(() => {
            invoke('close_splashscreen')
        }, 1000)
    })

    return (
        <div className="flex flex-center h-full flex-col g-8">
            <Logo />
            <span>Indlæser...</span>
        </div>
    )
}

export default SplashScreen
