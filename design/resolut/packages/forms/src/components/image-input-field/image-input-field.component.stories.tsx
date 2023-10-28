import { Meta, StoryFn } from '@storybook/react';
import Form from '../form/form.component';

import ImageInputField from './image-input-field.component';

const Component: Meta<typeof ImageInputField> = { title: 'ImageInputField', component: ImageInputField };

const Story: StoryFn<typeof ImageInputField> = props => (
    <Form>
        <ImageInputField {...props} />
    </Form>
);

export const SingleImageInputField = Story.bind({});

SingleImageInputField.args = { multiple: false, preview: true, name: 'image-input' };

export const MultipleImageInputField = Story.bind({});

MultipleImageInputField.args = {
    multiple: true,
    preview: true,
    name: 'image-input',
};

export default Component;
