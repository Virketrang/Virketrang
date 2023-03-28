import { Textarea, TextField, FieldGroup } from '@virketrang/forms';
import FirstScreenComponent from './first-screen.component.types';

const FirstScreen: FirstScreenComponent = ({ screen }) => {
    if (screen !== 1) return null;

    return (
        <>
            <FieldGroup>
                <TextField name="name" label="Navn" />
                <TextField name="stock" label="Lagerbeholdning" />
            </FieldGroup>
            <Textarea name="description" label="Beskrivelse" cols={30} rows={10} />
            <FieldGroup>
                <TextField name="retailPrice" label="Salgspris" />
                <TextField name="costPrice" label="Kostpris" />
            </FieldGroup>
        </>
    );
};

export default FirstScreen;

// autoComplete="on"
// autoCorrect="on"
// spellCheck={true}
