import { Meta, StoryFn } from '@storybook/react';
import Form from './form.component';

const Story: Meta<typeof Form> = { title: 'Form', component: Form };

const Template: StoryFn<typeof Form> = ({ children, ...props }) => <Form {...props}>{children}</Form>;

export const Default = Template.bind({});

export default Story;
