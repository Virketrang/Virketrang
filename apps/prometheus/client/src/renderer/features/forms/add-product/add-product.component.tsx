import { MouseEvent, Suspense, useState } from 'react';

import { Form } from '@resolut/forms';
import { Conditional } from '@resolut/core';

import useAddProductStyles from './add-product.component.styles';
import AddProductComponent from './add-product.component.types';

import { FirstScreen, SecondScreen, ThirdScreen } from './screens';

const handleSubmit = (formData: any) => {
    console.log(formData);
    // const payload = new FormData();

    // payload.append('name', formData.name.value);
    // payload.append('stock', formData.stock.value);
    // payload.append('description', formData.description.value);
    // payload.append('retailPrice', formData.retailPrice.value);
    // payload.append('costPrice', formData.costPrice.value);
    // formData.images.forEach((image: any) => {
    //     payload.append('images[]', image.value, image.name);
    // });

    // HttpClient.post('http://localhost:8080/products', payload, {
    //     useBaseUrl: false,
    //     errorMessage: 'Kunne ikke oprette produktet',
    // });
};

const AddProduct: AddProductComponent = () => {
    const [screen, setScreen] = useState<number>(2);

    const styles = useAddProductStyles();

    const forward = (event: MouseEvent<HTMLButtonElement>) => {
        screen < 3 && setScreen(currentValue => currentValue + 1);
    };
    const backward = (event: MouseEvent<HTMLButtonElement>) => {
        screen > 1 && setScreen(currentValue => currentValue - 1);
    };

    return (
        <Form className={styles.form} onSubmit={handleSubmit}>
            <Conditional condition={screen === 1}>
                <FirstScreen />
            </Conditional>
            <Conditional condition={screen === 2}>
                <Suspense>
                    <SecondScreen />
                </Suspense>
            </Conditional>
            <Conditional condition={screen === 3}>
                <ThirdScreen />
            </Conditional>
            <div className={styles.cta}>
                <Conditional condition={screen > 1}>
                    <button className={styles.delete} onClick={backward}>
                        Tilbage
                    </button>
                </Conditional>
                <button type="submit" className={styles.add} onClick={forward}>
                    {screen === 3 ? 'Tilføj' : 'Næste'}
                </button>
            </div>
        </Form>
    );
};

export default AddProduct;
