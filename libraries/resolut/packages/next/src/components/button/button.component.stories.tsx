import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from './button.component';

const Story: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

const Template: StoryFn<typeof Button> = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const Normal = Template.bind({});

Normal.args = {
    shape: 'normal',
    children: 'Normal',
    grow: true,
};

export const Round = Template.bind({});

Round.args = {
    shape: 'round',
    children: 'Round',
    grow: true,
};

export default Story;
