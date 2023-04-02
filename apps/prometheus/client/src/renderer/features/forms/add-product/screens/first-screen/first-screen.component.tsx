import { TextAreaField, InputField, FieldGroup } from '@resolut/forms';
import { memo } from 'react';
import FirstScreenComponent from './first-screen.component.types';

const FirstScreen: FirstScreenComponent = () => {
    return (
        <>
            <FieldGroup>
                <InputField name="name" label="Navn" />
                <InputField name="stock" label="Lagerbeholdning" />
            </FieldGroup>
            <TextAreaField name="description" label="Beskrivelse" cols={30} rows={10} />
            <FieldGroup>
                <InputField name="retailPrice" label="Salgspris" />
                <InputField name="costPrice" label="Kostpris" />
            </FieldGroup>
        </>
    );
};

export default memo(FirstScreen);
