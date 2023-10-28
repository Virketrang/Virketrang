import { Meta, StoryFn } from '@storybook/react';

import Drawer from './drawer.component';

const Story: Meta<typeof Drawer> = {
    title: 'Drawer',
    component: Drawer,
    argTypes: {
        placement: {
            options: ['left', 'right', 'top', 'bottom'],
            control: { type: 'inline-radio' },
        },
    },
};

const Template: StoryFn<typeof Drawer> = ({ ...props }) => <Drawer {...props} />;

export const Basic = Template.bind({});

Basic.args = {
    children: (
        <>
            <h1>Indkøbskurv</h1>
        </>
    ),
    open: true,
    backdrop: true,
    placement: 'right',
    width: 480,
    transition: {
        duration: 300,
        delay: 50,
        timingFunction: 'ease',
    },
    padding: '2em',
};

export default Story;
