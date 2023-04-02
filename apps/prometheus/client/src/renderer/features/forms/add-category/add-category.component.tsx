import { Field, Form, InputField, FieldData } from '@resolut/forms';
import { Button } from '@resolut/react';

import useAddCategoryStyles from './add-category.component.styles';
import AddCategoryComponent from './add-category.component.types';

import { createCategory } from '@api';

type CategoryField = FieldData<'category'>;

const AddCategory: AddCategoryComponent = () => {
    const styles = useAddCategoryStyles();

    const handleSubmit = ({ category }: CategoryField) => createCategory(category.value);

    return (
        <Form onSubmit={handleSubmit}>
            <InputField name="category" label="Kategori" />
            <Button backgroundColor="#7939ee" shape="rounded" stretch={true} fontWeight={600} className={styles.add}>
                Tilføj
            </Button>
        </Form>
    );
};

export default AddCategory;
