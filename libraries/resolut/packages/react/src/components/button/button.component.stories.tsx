import { Meta, StoryFn } from '@storybook/react';

import Button from './button.component';

const Story: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        shape: {
            options: ['square', 'round', 'rounded', 'circle'],
            control: { type: 'inline-radio' },
        },
    },
};

const Template: StoryFn<typeof Button> = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const SquareButton = Template.bind({});

SquareButton.args = {
    shape: 'square',
    children: 'Square',
    grow: true,
    size: 'medium',
    stretch: false,
};

export const RoundButton = Template.bind({});

RoundButton.args = {
    shape: 'round',
    children: 'Round',
    grow: true,
    size: 'medium',
    stretch: false,
};

export default Story;
