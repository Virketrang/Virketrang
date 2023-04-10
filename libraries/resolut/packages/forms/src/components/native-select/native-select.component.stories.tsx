import { Meta, StoryFn } from '@storybook/react';

import NativeSelect from './native-select.component';

const Component: Meta<typeof NativeSelect> = {
    title: 'NativeSelect',
    component: NativeSelect,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        shape: {
            options: ['square', 'rounded'],
            control: { type: 'inline-radio' },
        },
    },
};

const Story: StoryFn<typeof NativeSelect> = ({ ...args }) => <NativeSelect {...args} />;

export const SmallNativeSelect = Story.bind({});

SmallNativeSelect.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    size: 'small',
    stretch: false,
    loading: false,
    shape: 'square',
    // status: 'error',
};

export const MediumNativeSelect = Story.bind({ default: true });

MediumNativeSelect.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    size: 'medium',
    stretch: false,
    loading: false,
    shape: 'square',
    // status: 'warning',
};

export const LargeNativeSelect = Story.bind({});

LargeNativeSelect.args = {
    options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    size: 'large',
    stretch: false,
    loading: false,
    shape: 'square',
    // status: 'success',
};

export default Component;
