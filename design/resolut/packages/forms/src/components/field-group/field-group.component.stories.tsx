import { Meta, StoryFn } from '@storybook/react';
import FieldGroup from './field-group.component';

const Story: Meta<typeof FieldGroup> = { title: 'FieldGroup', component: FieldGroup };

const Template: StoryFn<typeof FieldGroup> = ({ children, ...props }) => <FieldGroup {...props}>{children}</FieldGroup>;

export const Default = Template.bind({});

export default Story;
