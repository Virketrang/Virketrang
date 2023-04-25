'use client';
import { createRef, forwardRef, memo, useEffect } from 'react';

import 'styles/base.sass';
import 'styles/button.sass';
import 'styles/size.sass';
import 'styles/shape.sass';

import { NotARefObjectError } from '../../errors';

import ModalComponent from './modal.component.types';
import styles from './modal.component.module.sass';

const Modal: ModalComponent = memo(
    forwardRef(
        (
            {
                draggable = false,
                className = '',
                title,
                footer,
                open,
                shape = 'rounded',
                backdrop = 'rgba(0, 0, 0, 0.1)',
                style,
                ...props
            },
            forwardedRef
        ) => {
            if (typeof forwardedRef === 'function') throw new NotARefObjectError();

            const modal = forwardedRef || createRef<HTMLDialogElement>()!;

            const classNames = `${className} ${styles.modal} ${shape}`;

            const dynamic = { '--modal-backdrop': backdrop };

            useEffect(() => {
                modal.current?.removeAttribute('open');

                open ? modal.current?.showModal() : modal.current?.close();
            }, [open]);

            return (
                <dialog
                    style={{ ...dynamic, ...style }}
                    {...props}
                    ref={modal}
                    className={classNames}
                    draggable={draggable}>
                    <form className={styles.form} method="dialog">
                        <div className={styles.header}>
                            <h4>{title}</h4>{' '}
                            <button className={styles.close}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.body}>Content</div>
                        <div className={styles.footer}>
                            {footer ? (
                                footer
                            ) : (
                                <>
                                    <button className={`${styles.cancel} medium rounded`}>Luk</button>
                                    <button className={`${styles.ok} medium rounded`}>Ok</button>
                                </>
                            )}
                        </div>
                    </form>
                </dialog>
            );
        }
    )
);

export default Modal;
