import { Meta, StoryFn } from '@storybook/react';

import Input from './input.component';

const Story: Meta<typeof Input> = { title: 'Input', component: Input };

const Template: StoryFn<typeof Input> = props => <Input {...props} />;

export const TextInput = Template.bind({});

TextInput.args = {
    name: 'text',
    type: 'text',
};

export default Story;
