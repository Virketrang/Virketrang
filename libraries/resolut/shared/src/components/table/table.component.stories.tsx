import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Table from './table.component';

const Story: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
};

const Template: StoryFn<typeof Table> = ({ children, ...args }) => <Table {...args}>{children}</Table>;

export const Default = Template.bind({});

Default.args = {};

export default Story;
