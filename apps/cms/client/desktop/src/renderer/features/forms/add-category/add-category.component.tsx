import { Field, Form, TextField, FieldData } from '@virketrang/forms';
import { Button } from '@virketrang/resolut-react';

import useAddCategoryStyles from './add-category.component.styles';
import AddCategoryComponent from './add-category.component.types';

import { createCategory } from '@api';

type CategoryField = FieldData<'category'>;

const AddCategory: AddCategoryComponent = () => {
    const styles = useAddCategoryStyles();

    const handleSubmit = ({ category }: CategoryField) => createCategory(category.value);

    return (
        <Form onSubmit={handleSubmit}>
            <Field>
                <TextField name="category" label="Kategori" />
            </Field>
            <Button backgroundColor="#7939ee" shape="rounded" stretch={true} fontWeight={600} className={styles.add}>
                Tilføj
            </Button>
        </Form>
    );
};

export default AddCategory;
