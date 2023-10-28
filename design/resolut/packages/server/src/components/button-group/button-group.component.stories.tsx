import { Meta, StoryFn } from '@storybook/react';
import ButtonGroup from './button-group.component';

const Component: Meta<typeof ButtonGroup> = {
    title: 'ButtonGroup',
    component: ButtonGroup,
};

const Story: StoryFn<typeof ButtonGroup> = ({ children, ...props }) => <ButtonGroup {...props}>{children}</ButtonGroup>;

export const DefaultButtonGroup = Story.bind({});

DefaultButtonGroup.args = {};

export default Component;
