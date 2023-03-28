import { Meta, StoryFn } from '@storybook/react';

import Option from './option.component';

const Component: Meta<typeof Option> = {
    title: 'Option',
    component: Option,
};

const Story: StoryFn<typeof Option> = ({ children, ...args }) => <Option {...args}>{children}</Option>;

export const DefaultOption = Story.bind({});

export const DefaultOptionArgs = {
    value: 'test',
    children: 'Test',
} as const;

DefaultOption.args = DefaultOptionArgs;

export default Component;
