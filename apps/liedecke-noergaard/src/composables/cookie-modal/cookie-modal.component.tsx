'use client'
import { memo, createRef, useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import CookieModalComponent from './cookie-modal.types'
import styles from './cookie-modal.module.scss'

const CookieModal: CookieModalComponent = memo(({ dictionary }) => {
    const modal = createRef<HTMLDialogElement>()
    const [screen, setScreen] = useState<'CONSENT' | 'DETAILS' | 'ABOUT'>('CONSENT')

    useEffect(() => {
        if (!modal) return
        modal.current?.removeAttribute('open')

        modal.current?.showModal()
    }, [modal])

    return (
        <dialog className={styles.modal} ref={modal}>
            <form method="dialog">
                <span className={styles.logo}>Liedecke & Noergaard</span>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <button>{dictionary.navigation.consent}</button>
                        </li>
                        <li>
                            <button>{dictionary.navigation.details}</button>
                        </li>
                        <li>
                            <button>{dictionary.navigation.about}</button>
                        </li>
                    </ul>
                </nav>
                <div className={styles.content}>
                    <div>
                        <h4>{dictionary.consent.title}</h4>
                        <p>
                            {dictionary.consent.text} <Link href="">{dictionary.consent.cookiePolicy}</Link>
                        </p>
                    </div>
                    <div className={styles.checkboxes}>
                        <span className={styles.nessesary}>{dictionary.consent.nessesary}</span>

                        <label htmlFor="preferences">
                            <input defaultChecked type="checkbox" name="preferences" id="preferences" />
                            <span>{dictionary.consent.preferences}</span>
                        </label>
                        <label htmlFor="statistics">
                            <input defaultChecked type="checkbox" name="statistics" id="statistics" />
                            <span>{dictionary.consent.statistics}</span>
                        </label>
                        <label htmlFor="marketing">
                            <input defaultChecked type="checkbox" name="marketing" id="marketing" />
                            <span>{dictionary.consent.marketing}</span>
                        </label>
                    </div>
                </div>
                <div className={styles.actions} role="group">
                    <button className={styles.nessesary}>{dictionary.nessesary}</button>
                    <button className={styles.accept}>{dictionary.accept}</button>
                </div>
            </form>
        </dialog>
    )
})

CookieModal.displayName = 'CookieModal'

export default CookieModal
