import useSWR from 'swr';

import { Option, SelectField } from '@resolut/forms';
import { Category } from '@packages/interfaces';
import { ProductType } from '@packages/enums';

import SecondScreenComponent from './second-screen.component.types';

const SecondScreen: SecondScreenComponent = () => {
    const { data, isLoading } = useSWR('http://localhost:8080/categories');

    return (
        <>
            <SelectField name="available" label="Status" value="true">
                <Option value="true">Aktiv</Option>
                <Option value="false">InAktiv</Option>
            </SelectField>
            <SelectField name="category" label="Kategori" value={data.body[0].id}>
                {!isLoading &&
                    data.body.map(({ id, name }: Category) => (
                        <Option key={id} value={id}>
                            {name}
                        </Option>
                    ))}
            </SelectField>
            <SelectField name="type" label="Type" value={ProductType.UTENSIL}>
                <Option value={ProductType.UTENSIL}>Husgeråd</Option>
                <Option value={ProductType.CONFECTURE}>Konfekture</Option>
                <Option value={ProductType.CIDER}>Cider</Option>
            </SelectField>
        </>
    );
};

export default SecondScreen;
