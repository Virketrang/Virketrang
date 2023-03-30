import { Meta, StoryFn } from '@storybook/react';

import { Form } from '..';

import TextAreaField from './text-area-field.component';

const Story: Meta<typeof TextAreaField> = { title: 'TextAreaField', component: TextAreaField };

const Template: StoryFn<typeof TextAreaField> = ({ ...props }) => (
    <Form>
        <TextAreaField {...props} />
    </Form>
);

export const DefaultTextAreaField = Template.bind({});

DefaultTextAreaField.args = {
    name: 'textareafield',
    label: 'TextAreaField',
};

export default Story;
