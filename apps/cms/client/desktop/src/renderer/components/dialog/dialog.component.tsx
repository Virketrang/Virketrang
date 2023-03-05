import { useEffect, useRef } from 'react';
import useDialogStyles from './dialog.component.styles';
import DialogComponent from './dialog.component.types';

const Dialog: DialogComponent = ({ open, children, title, description, close }) => {
    const styles = useDialogStyles();
    const ref = useRef<HTMLDialogElement | null>(null);

    console.log(open);

    useEffect(() => {
        const dialog = ref.current;

        if (open) dialog?.showModal();

        return () => dialog?.close();
    }, [open]);

    return (
        <dialog ref={ref} className={styles.dialog} onCancel={close}>
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
                <svg
                    className={styles.close}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    onClick={close}
                >
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
            </div>
            {children}
        </dialog>
    );
};

export default Dialog;
