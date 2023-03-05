import { Resize } from '@virketrang/jss';
import useAddProductStyles from './add-product.component.styles';
import AddProductComponent from './add-product.component.types';

const AddProduct: AddProductComponent = () => {
    const styles = useAddProductStyles();

    return (
        <form className={styles.form}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor="name">
                    Navn
                </label>
                <input className={styles.input} type="text" name="name" />
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor="description">
                    Beskrivelse
                </label>
                <textarea
                    autoComplete="on"
                    autoCorrect="on"
                    spellCheck={true}
                    className={styles.input}
                    name="description"
                    cols={30}
                    rows={10}
                    style={{ resize: Resize.vertical }}
                ></textarea>
            </div>
            <div className={styles.double}></div>
            <div>
                <input type="file" name="file" className={styles.file} />
                <label htmlFor="file" className={styles.fileLabel}>
                    <div>
                        <span className={styles.dropzone}> Drop files here </span>
                        <span className={styles.or}> Or </span>
                        <span className={styles.browse}> Browse </span>
                    </div>
                </label>
            </div>
            <div className={styles.filelist}>
                <div className={styles.fileitem}>
                    <span className={styles.filename}> flødebolle.png </span>
                    <button className={styles.filebutton}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.cta}>
                <button className={styles.delete}>Slet</button>
                <button className={styles.add}>Tilføj</button>
            </div>
        </form>
    );
};

export default AddProduct;
