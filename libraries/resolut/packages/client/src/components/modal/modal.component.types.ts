import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

type ModalShape = 'square' | 'rounded';

export interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
    open: boolean;
    title: string;
    draggable?: boolean;
    footer?: any;
    backdrop?: string;
    shape?: ModalShape;
}

export type ModalRef = RefAttributes<HTMLDialogElement>;

type ModalComponent = ForwardRefExoticComponent<ModalProps & ModalRef>;

export default ModalComponent;
