import Image from 'next/image'

import Visa from '@/liedecke-noergaard/public/icons/visa.png'
import Dankort from '@/liedecke-noergaard/public/icons/dankort.png'
import GooglePay from '@/liedecke-noergaard/public/icons/google-pay.png'
import { ApplePay, Mastercard } from '@/liedecke-noergaard/assets/svgs'

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
                <Image src={Visa.src} width={32} height={10} alt="Visa logo" />
            </li>
            <li>
                <Image src={Dankort.src} width={33} height={20} alt="Dankort logo" />
            </li>
        </ul>
    )
})

PaymentMethods.displayName = 'PaymentMethods'

export default PaymentMethods
