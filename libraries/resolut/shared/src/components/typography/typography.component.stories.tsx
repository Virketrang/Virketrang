import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Typography from './typography.component';

const Story: Meta<typeof Typography> = {
    title: 'Typography',
    component: Typography,
};

const Template: StoryFn<typeof Typography> = ({ children, ...props }) => <Typography {...props}>{children}</Typography>;

export const Heading1 = Template.bind({});

Heading1.args = { component: 'heading1', element: 'h1', children: 'Heading1' };

export const Heading2 = Template.bind({});

Heading2.args = { component: 'heading2', element: 'h2', children: 'Heading2' };

export const Heading3 = Template.bind({});

Heading3.args = { component: 'heading3', element: 'h3', children: 'Heading3' };

export const Heading4 = Template.bind({});

Heading4.args = { component: 'heading4', element: 'h4', children: 'Heading4' };

export const Heading5 = Template.bind({});

Heading5.args = { component: 'heading5', element: 'h5', children: 'Heading5' };

export const Heading6 = Template.bind({});

Heading6.args = { component: 'heading6', element: 'h6', children: 'Heading6' };

export const Subtitle1 = Template.bind({});

Subtitle1.args = { component: 'subtitle1', element: 'span', children: 'Subtitle1' };

export const Subtitle2 = Template.bind({});

Subtitle2.args = { component: 'subtitle2', element: 'span', children: 'Subtitle2' };

export const Body1 = Template.bind({});

Body1.args = { component: 'body1', element: 'p', children: 'Body1' };

export const Body2 = Template.bind({});

Body2.args = { component: 'body2', element: 'p', children: 'Body2' };

export default Story;
