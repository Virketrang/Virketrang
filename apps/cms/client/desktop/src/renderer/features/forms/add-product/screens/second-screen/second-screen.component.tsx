import { Select } from '@components/index';

import SecondScreenComponent from './second-screen.component.types';

import useSWR from 'swr';
import { ProductType } from '@packages/enums';

const SecondScreen: SecondScreenComponent = ({
    screen,
    type,
    setType,
    available,
    setAvailable,
    category,
    setCategory,
}) => {
    const { data, isLoading } = useSWR('http://localhost:8080/categories');

    if (screen !== 2) return null;

    return (
        <>
            <Select
                name="available"
                label="Status"
                options={[
                    { label: 'Aktiv', value: 'true' },
                    { label: 'Inaktiv', value: 'false' },
                ]}
                value={available}
                onChange={event => setAvailable(event.currentTarget.value as 'true' | 'false')}
            />
            <Select
                name="category"
                label="Kategori"
                options={data.body.map(({ id, name }: { id: string; name: string }) => {
                    return { value: id, label: name };
                })}
                value={category}
                onChange={event => setCategory(event.currentTarget.value)}
            />
            <Select
                name="type"
                label="Type"
                options={[
                    { label: 'Husgeråd', value: ProductType.UTENSIL },
                    { label: 'Konfekture', value: ProductType.CONFECTURE },
                    { label: 'Cider', value: ProductType.CIDER },
                ]}
                value={type}
                onChange={event => setType(event.currentTarget.value as ProductType)}
            />
        </>
    );
};

export default SecondScreen;
