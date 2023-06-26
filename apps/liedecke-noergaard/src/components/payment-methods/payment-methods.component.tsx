import { memo } from 'react'
import Image from 'next/image'

import Visa from '@/public/icons/visa.png'
import Dankort from '@/public/icons/dankort.png'
import GooglePay from '@/public/icons/google-pay.png'
import { ApplePay, Mastercard } from '@/assets/svgs'

import styles from './payment-methods.module.scss'
import PaymentMethodsComponent from './payment-methods.types'

const PaymentMethods: PaymentMethodsComponent = memo(() => {
    return (
        <ul className={styles.paymentMethods}>
            <li>
                <ApplePay />
            </li>
            <li>
                <Image src={GooglePay.src} width={32} height={18} alt="Google Pay logo" />
            </li>
            <li>
                <Mastercard />
            </li>
            <li>
                <Image src={Visa.src} width={32} height={10.37} alt="Visa logo" />
            </li>
            <li>
                <Image src={Dankort.src} width={33.18} height={20} alt="Dankort logo" />
            </li>
        </ul>
    )
})

PaymentMethods.displayName = 'PaymentMethods'

export default PaymentMethods
