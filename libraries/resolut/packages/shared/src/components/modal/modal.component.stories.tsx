import { Meta, StoryFn } from '@storybook/react';
import Modal from './modal.component';

const Component: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
    argTypes: {},
};

const Story: StoryFn<typeof Modal> = props => <Modal {...props} />;

export const BasicModal = Story.bind({});

BasicModal.args = {
    title: 'Basic modal',
    open: true,
    draggable: true,
};

export default Component;
