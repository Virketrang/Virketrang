import { HTMLPropsWithoutRefAndChildren } from 'types/index';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type ModalShape = 'square' | 'rounded';

export interface ModalProps extends HTMLPropsWithoutRefAndChildren<HTMLDialogElement> {
    // @REQUIRED PROPERTIES
    open: boolean;
    title: string;
    // @OPTIONAL PROPERTIES
    draggable?: boolean;
    footer?: any;
    backdrop?: string;
    shape?: ModalShape;
}

export type ModalRef = RefAttributes<HTMLDialogElement>;

type ModalComponent = ForwardRefExoticComponent<ModalProps & ModalRef>;

export default ModalComponent;
