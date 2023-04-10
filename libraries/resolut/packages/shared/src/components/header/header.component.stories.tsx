import { Meta, StoryFn } from '@storybook/react';

import Header from './header.component';

const Component: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
};

const Story: StoryFn<typeof Header> = ({ children, ...props }) => <Header {...props}>{children}</Header>;

export const DefaultHeader = Story.bind({});

DefaultHeader.args = {};

export default Component;
