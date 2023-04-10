import { Meta, StoryFn } from '@storybook/react';
import Form from '../form/form.component';

import ImagePreview from './image-preview.component';

const Component: Meta<typeof ImagePreview> = { title: 'ImagePreview', component: ImagePreview };

const Story: StoryFn<typeof ImagePreview> = props => (
    <Form>
        <ImagePreview {...props} />
    </Form>
);

export const DefaultImagePreview = Story.bind({});

DefaultImagePreview.args = { multiple: false };

export default Component;
