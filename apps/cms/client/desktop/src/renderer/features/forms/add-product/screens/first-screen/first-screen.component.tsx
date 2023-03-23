import { Textarea, TextField } from '@components/index';
import useAddProductStyles from '../../add-product.component.styles';
import FirstScreenComponent from './first-screen.component.types';

const FirstScreen: FirstScreenComponent = ({
    name,
    stock,
    description,
    retailPrice,
    costPrice,
    setName,
    setStock,
    setDescription,
    setRetailPrice,
    setCostPrice,
    screen,
}) => {
    const styles = useAddProductStyles();

    if (screen !== 1) return null;

    return (
        <>
            <div className={styles.double}>
                <TextField
                    name="name"
                    label="Navn"
                    onChange={event => setName(event.currentTarget.value)}
                    value={name}
                />
                <TextField
                    name="stock"
                    label="Lagerbeholdning"
                    onChange={event => setStock(event.currentTarget.value)}
                    value={stock}
                />
            </div>
            <Textarea
                name="description"
                label="Beskrivelse"
                onChange={event => setDescription(event.currentTarget.value)}
                value={description}
                autoComplete="on"
                autoCorrect="on"
                spellCheck={true}
                cols={30}
                rows={10}
            />
            <div className={styles.double}>
                <TextField
                    name="retailPrice"
                    label="Salgspris"
                    onChange={event => setRetailPrice(event.currentTarget.value)}
                    value={retailPrice}
                />
                <TextField
                    name="costPrice"
                    label="Kostpris"
                    onChange={event => {
                        setCostPrice(event.currentTarget.value);
                    }}
                    value={costPrice}
                />
            </div>
        </>
    );
};

export default FirstScreen;
