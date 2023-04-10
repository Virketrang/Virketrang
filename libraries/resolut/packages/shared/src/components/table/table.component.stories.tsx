import { Meta, StoryFn } from '@storybook/react';

import Table from './table.component';

const Component: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
};

const Story: StoryFn<typeof Table> = ({ children, ...args }) => <Table {...args}>{children}</Table>;

export const Default = Story.bind({});

Default.args = {};

export default Component;
