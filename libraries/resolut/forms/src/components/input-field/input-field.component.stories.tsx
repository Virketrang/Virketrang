import { Meta, StoryFn } from '@storybook/react';

import InputField from './input-field.component';

const Component: Meta<typeof InputField> = {
    title: 'InputField',
    component: InputField,
};

const Story: StoryFn<typeof InputField> = ({ children, ...args }) => <InputField {...args}>{children}</InputField>;

export const DefaultInputField = Story.bind({});

DefaultInputField.args = {};

export default Component;
