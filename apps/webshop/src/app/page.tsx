import { Button, Table, Typography } from '@virketrang/resolut-next';
import { __server__ } from '@constants';
import HttpClient from '@virketrang/http';
import styles from './page.module.sass';
import Link from 'next/link';

HttpClient.baseURL = __server__;

export const metadata = {
    title: 'Liedecke & Noergaard | Forside',
    description: 'Forside',
};

export const revalidate = 86400;

export default function Page() {
    return (
        <>
            <section className={styles.first}>
                <Typography component="heading1" element="h2" className={styles.title}>
                    Lorum Ipsum
                </Typography>
                <Typography component="body1" element="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button
                    shape="round"
                    link={Link}
                    className={styles.button}
                    href="/products"
                    color="#ffffff"
                    backgroundColor="#601030"
                    grow={true}>
                    Se produkter
                </Button>
                <Table>
                    <Table.Head></Table.Head>
                </Table>
            </section>
        </>
    );
}
