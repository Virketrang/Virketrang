import { Meta, StoryFn } from '@storybook/react';

import Select from './select.component';
import { DefaultOption, DefaultOptionArgs } from '../option/option.component.stories';
import Option from '../option/option.component';

const Component: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};

const Story: StoryFn<typeof Select> = ({ ...args }) => <Select {...args} />;

export const SmallSelect = Story.bind({});

SmallSelect.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    size: 'small',
    stretch: false,
};

export const MediumSelect = Story.bind({ default: true });

MediumSelect.args = {
    children: <Option value="hello">Hello</Option>,
    size: 'medium',
    stretch: false,
};

export const LargeSelect = Story.bind({});

LargeSelect.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    size: 'large',
    stretch: false,
};

export default Component;
