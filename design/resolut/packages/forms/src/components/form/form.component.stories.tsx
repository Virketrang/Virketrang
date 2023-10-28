import { Meta, StoryFn } from '@storybook/react';
import { InputField } from '..';
import Form from './form.component';

const Story: Meta<typeof Form> = { title: 'Form', component: Form };

const Template: StoryFn<typeof Form> = ({ children, ...props }) => <Form {...props}>{children}</Form>;

export const Default = Template.bind({});

Default.args = {
    children: (
        <>
            <InputField name="field1" value="" label="Field1" />
            <InputField name="field2" value="" label="Field2" />
        </>
    ),
};

export default Story;
