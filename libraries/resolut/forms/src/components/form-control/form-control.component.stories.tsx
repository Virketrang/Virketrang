import { Meta, StoryFn } from '@storybook/react';

import FormControl from './form-control.component';

const Story: Meta<typeof FormControl> = { title: 'FormControl', component: FormControl };

const Template: StoryFn<typeof FormControl> = ({ children, ...props }) => (
    <FormControl {...props}>{children}</FormControl>
);

export const DefaultFormControl = Template.bind({});

DefaultFormControl.args = {};

export default Story;
