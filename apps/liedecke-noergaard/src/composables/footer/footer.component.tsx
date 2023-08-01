import {
    Logo,
    LocaleSwitch,
    FooterList,
    SocialMedia,
    PaymentMethods,
    Credentials
} from '@/liedecke-noergaard/components'

import FooterComponent from './footer.types'
import styles from './footer.module.scss'

const Footer: FooterComponent = memo(({ dictionary: { about, information, other, contacts, copyright }, locale }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <FooterList
                    title="Kontakt os"
                    entries={[
                        { label: contacts.openingHours, href: '' },
                        { label: contacts.mail, href: '' },
                        { label: contacts.phone, href: '' },
                        { label: contacts.address, href: '' },
                        { label: contacts.cvr, href: '' }
                    ]}
                    className={styles.contactUs}
                />
                <FooterList
                    title={about.title}
                    entries={Object.values(about.entries).map((value) => ({ label: value, href: '' }))}
                />
                <FooterList
                    title={information.title}
                    entries={Object.values(information.entries).map((value) => ({ label: value, href: '' }))}
                />
                <FooterList
                    title={other.title}
                    entries={[
                        { label: other.entries.career, href: '/career' },
                        { label: other.entries.business, href: '/business' },
                        { label: other.entries.employees, href: '/employees' },
                        { label: other.entries.annualReport, href: '/annual-report' },
                        { label: other.entries.suppliers, href: '/suppliers' },
                        { label: other.entries.imageBank, href: '/image-bank' }
                    ]}
                />
                <div className={styles.section4}>
                    <div>
                        <Logo className={styles.logo} href="/" country />
                        <ul className={styles.contactInfo}>
                            <li>{contacts.openingHours}</li>
                            <li>
                                <a href="mailto:info@liedeckenoergaard.dk">{contacts.mail}</a>
                            </li>
                            <li>
                                <a href="tel:004530288255">{contacts.phone}</a>
                            </li>
                        </ul>
                        <SocialMedia className={styles.socialsTop} />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <LocaleSwitch currentLocale={locale} />
                <SocialMedia className={styles.socialsBottom} />
                <PaymentMethods />
                <Credentials copyright={copyright} address={contacts.address} cvr={contacts.cvr} />
            </div>
        </footer>
    )
})

Footer.displayName = 'Footer'

export default Footer
