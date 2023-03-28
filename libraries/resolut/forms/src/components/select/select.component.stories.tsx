import { Meta, StoryFn } from '@storybook/react';

import Select from './select.component';
import { DefaultOption, DefaultOptionArgs } from '../option/option.component.stories';

const Component: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};

const Story: StoryFn<typeof Select> = ({ children, ...args }) => <Select {...args}>{children}</Select>;

export const DefaultSelect = Story.bind({ default: true });

DefaultSelect.args = { children: <DefaultOption {...DefaultOptionArgs} /> };

export default Component;
