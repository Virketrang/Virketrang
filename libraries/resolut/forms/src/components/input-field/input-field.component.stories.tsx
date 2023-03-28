import { Meta, StoryFn } from '@storybook/react';

import TextField from './text-field.component';

const Component: Meta<typeof TextField> = {
    title: 'TextField',
    component: TextField,
};

const Story: StoryFn<typeof TextField> = ({ children, ...args }) => <TextField {...args}>{children}</TextField>;

export const DefaultTextField = Story.bind({});

DefaultTextField.args = {};

export default Component;
