import { Meta, StoryFn } from '@storybook/react';

import Label from './label.component';

const Story: Meta<typeof Label> = { title: 'Label', component: Label };

const Template: StoryFn<typeof Label> = ({ children, ...props }) => <Label {...props}>{children}</Label>;

export const TextLabel = Template.bind({});

TextLabel.args = {
    htmlFor: 'text',
    children: 'Text Input',
};

export default Story;
