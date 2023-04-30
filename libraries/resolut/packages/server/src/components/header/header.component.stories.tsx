import { Meta, StoryFn } from '@storybook/react';

import Header from './header.component';

const Component: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    argTypes: {
        inset: {
            control: 'select',
            options: [
                'size-fluid-0',
                'size-fluid-1',
                'size-fluid-2',
                'size-fluid-3',
                'size-fluid-4',
                'size-fluid-5',
                'size-fluid-6',
                'size-fluid-7',
                'size-fluid-8',
                'size-fluid-9',
            ],
        },
    },
};

const Story: StoryFn<typeof Header> = ({ children, ...props }) => (
    <Header {...props}>
        <p>Left</p>
        <p>Center</p>
        <p>Center</p>
        <p>Right</p>
    </Header>
);

export const DefaultHeader = Story.bind({});

DefaultHeader.args = {
    height: '4rem',
    inset: 'size-fluid-2',
    backgroundColor: 'purple',
    horizontalAlignment: 'space-between',
    verticalAlignment: 'center',
};

export default Component;
