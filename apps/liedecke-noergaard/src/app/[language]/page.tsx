import Image from 'next/image'

import Product from '../../../public/assets/products/confecture/confecture-1.webp'
import Mixed from '../../../public/assets/banners/mixed.jpeg'

import styles from './page.module.sass'

import { Typography, Button, Flex } from '@resolut/server'

export const metadata = {
    title: 'Liedecke & Noergaard | Forside',
    description: 'Forside'
}

export const revalidate = 86400

export default function Page() {
    return (
        <>
            <Flex fallback="orange" background={`url(${Mixed.src})`} height="32rem" direction="column" container>
                <Typography color="white" marginBottom="0.1em" variant="heading6" element="h2" fluid container>
                    Lorum Ipsum
                </Typography>
                <Typography color="white" variant="body1" element="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button shape="round" marginTop="1.5rem" color="#ffffff" backgroundColor="#601030">
                    Se produkter
                </Button>
            </Flex>
        </>
    )
}
