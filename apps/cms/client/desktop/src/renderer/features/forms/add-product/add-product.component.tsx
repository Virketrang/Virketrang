import { FormEvent, useState } from 'react';

import HttpClient from '@virketrang/http';
import { ProductType } from '@packages/enums';

import useAddProductStyles from './add-product.component.styles';
import AddProductComponent from './add-product.component.types';

import { Form } from '@components/index';
import { FirstScreen, SecondScreen, ThirdScreen } from './screens';

const AddProduct: AddProductComponent = () => {
    const [screen, setScreen] = useState<1 | 2 | 3>(1);

    const [name, setName] = useState<string>('');
    const [stock, setStock] = useState<string>('0');
    const [description, setDescription] = useState<string>('');
    const [retailPrice, setRetailPrice] = useState<string>('0');
    const [costPrice, setCostPrice] = useState<string>('0');
    const [category, setCategory] = useState<string>('');
    const [type, setType] = useState<ProductType>(ProductType.CONFECTURE);
    const [available, setAvailable] = useState<'true' | 'false'>('true');
    const [images, setImages] = useState<File[]>([]);

    const styles = useAddProductStyles();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = new FormData();

        payload.append('name', name);
        payload.append('stock', stock);
        payload.append('description', description);
        payload.append('retailPrice', retailPrice);
        payload.append('costPrice', costPrice);
        images.forEach(image => {
            payload.append('images[]', image, image.name);
        });

        try {
            HttpClient.post('http://localhost:8080/products', payload, {
                useBaseUrl: false,
                errorMessage: 'Kunne ikke oprette produktet',
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form className={styles.form} onSubmit={handleSubmit}>
            <FirstScreen
                name={name}
                setName={setName}
                stock={stock}
                setStock={setStock}
                description={description}
                setDescription={setDescription}
                retailPrice={retailPrice}
                setRetailPrice={setRetailPrice}
                costPrice={costPrice}
                setCostPrice={setCostPrice}
                screen={screen}
            />
            <SecondScreen
                screen={screen}
                type={type}
                setType={setType}
                available={available}
                setAvailable={setAvailable}
                category={category}
                setCategory={setCategory}
            />
            <ThirdScreen images={images} setImages={setImages} screen={screen} />
            <div className={styles.cta}>
                {screen > 1 && (
                    <button
                        className={styles.delete}
                        onClick={event => {
                            event.preventDefault();
                            if (screen === 3) setScreen(2);
                            if (screen === 2) setScreen(1);
                        }}>
                        Tilbage
                    </button>
                )}
                <button
                    className={styles.add}
                    onClick={event => {
                        if (screen < 3) {
                            event.preventDefault();
                        }
                        if (screen === 2) setScreen(3);
                        if (screen === 1) setScreen(2);
                    }}>
                    {screen === 3 ? 'Tilføj' : 'Næste'}
                </button>
            </div>
        </Form>
    );
};

export default AddProduct;
