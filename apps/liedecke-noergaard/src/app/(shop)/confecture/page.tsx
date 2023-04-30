import { Product } from '@components';
import Confecture from '../../../../public/assets/banners/confecture.jpeg';

import { Flex, Typography } from '@resolut/server';
import styles from './page.module.sass';

const data = [
    {
        id: 1,
        price: 59,
        name: 'Flødebolle',
        images: {
            cover: {
                close: { url: '/assets/products/confecture/confecture-11.webp', alt: 'Billede 11' },
                distant: { url: '/assets/products/confecture/confecture-1.webp', alt: 'Billede 1' },
            },
        },
    },
    {
        id: 2,
        price: 59,
        name: 'Flødebolle',
        images: {
            cover: {
                close: { url: '/assets/products/confecture/confecture-22.webp', alt: 'Billede 22' },
                distant: { url: '/assets/products/confecture/confecture-2.webp', alt: 'Billede 2' },
            },
        },
    },
    {
        id: 3,
        price: 59,
        name: 'Flødebolle',
        images: {
            cover: {
                close: { url: '/assets/products/confecture/confecture-33.webp', alt: 'Billede 33' },
                distant: { url: '/assets/products/confecture/confecture-3.webp', alt: 'Billede 3' },
            },
        },
    },
    {
        id: 4,
        price: 59,
        name: 'Flødebolle',
        images: {
            cover: {
                close: { url: '/assets/products/confecture/confecture-44.webp', alt: 'Billede 44' },
                distant: { url: '/assets/products/confecture/confecture-4.webp', alt: 'Billede 4' },
            },
        },
    },
] as const;

export default async function Page() {
    return (
        <>
            <Flex height="32rem" fallback="#3d3e41" background={`url(${Confecture.src})`} container>
                <Typography color="#ffffff" variant="subtitle1" element="h1" fluid container>
                    Konfekture
                </Typography>
            </Flex>
            <div className={styles.products}>
                {data.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </>
    );
}
