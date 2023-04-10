import useSWR from 'swr';

import { Field, Option, NativeSelect } from '@resolut/forms';
import { Category } from '@packages/interfaces';
import { ProductType } from '@packages/enums';

import SecondScreenComponent from './second-screen.component.types';

const SecondScreen: SecondScreenComponent = () => {
    const { data, isLoading } = useSWR('http://localhost:8080/categories');

    return (
        <>
            <NativeSelect name="available" label="Status" value="true" stretch>
                <Option value="true">Aktiv</Option>
                <Option value="false">InAktiv</Option>
            </NativeSelect>

            <NativeSelect name="category" label="Kategori" value={data.body[0].id} loading={isLoading} stretch>
                {!isLoading &&
                    data.body.map(({ id, name }: Category) => (
                        <Option key={id} value={id}>
                            {name}
                        </Option>
                    ))}
            </NativeSelect>

            <NativeSelect name="type" label="Type" value={ProductType.UTENSIL} stretch>
                <Option value={ProductType.UTENSIL}>Husgeråd</Option>
                <Option value={ProductType.CONFECTURE}>Konfekture</Option>
                <Option value={ProductType.CIDER}>Cider</Option>
            </NativeSelect>
        </>
    );
};

export default SecondScreen;
