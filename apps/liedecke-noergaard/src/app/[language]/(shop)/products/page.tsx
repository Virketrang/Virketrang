import styles from './page.module.sass';

export const metadata = {
    title: 'Liedecke & Noergaard | Produkter',
    description: 'Alles vores produkter',
};

// async function getData() {
//     const res = await fetch('http://localhost:8080/products');

//     if (!res.ok) throw new Error('Failed to fetch data');

//     const json = await res.json();

//     return json.body;
// }

const Products = async () => {
    // const products: Product[] = await getData();

    return (
        <section className="">
            <h2 className={styles.title}>Udvalgte Produkter</h2>
            <div className={styles.products}>TODO: Fix manglende render</div>
        </section>
    );
};

export default Products;
