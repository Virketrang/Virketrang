import { Form, TextField } from '@components/index';
import HttpClient from '@virketrang/http';
import { FormEvent, useState } from 'react';
import useAddCategoryStyles from './add-category.component.styles';
import AddCategoryComponent from './add-category.component.types';

const errorMessage = 'Kunne ikke oprette produktet';

const AddCategory: AddCategoryComponent = () => {
    const styles = useAddCategoryStyles();

    const [category, setCategory] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(HttpClient.baseURL);

        try {
            HttpClient.post(
                'http://localhost:8080/categories',
                { name: category },
                {
                    errorMessage,
                    useBaseUrl: false,
                    json: true,
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                name="category"
                label="Kategori"
                onChange={event => setCategory(event.currentTarget.value)}
                value={category}
            />
            <button className={styles.add}>Tilføj</button>
        </Form>
    );
};

export default AddCategory;
