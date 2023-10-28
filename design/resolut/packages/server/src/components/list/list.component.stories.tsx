import { Meta, StoryFn } from '@storybook/react';

import ListComponent from './list.component.types';
import List from './list.component';

const Component: Meta<ListComponent> = {
    title: 'List',
    component: List,
    args: {
        element: 'ul',
        styleType: 'none',
    },
    argTypes: {
        element: {
            control: 'inline-radio',
            options: ['ul', 'ol'],
        },
        styleType: {
            control: 'select',
            options: ['disc', 'circle', 'square', 'decimal', 'georgian', 'trad-chinese-informal', 'kannada', 'none'],
        },
    },
};

const Template: StoryFn<ListComponent> = ({ ...props }) => <List {...props} />;

export const Default = Template.bind({});

Default.args = {};

export default Component;
