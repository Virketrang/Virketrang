import { Meta, StoryFn } from '@storybook/react';

import ImageInput from './image-input.component';

const Component: Meta<typeof ImageInput> = { title: 'ImageInput', component: ImageInput };

const Story: StoryFn<typeof ImageInput> = props => <ImageInput {...props} />;

export const SingleImageInput = Story.bind({});

SingleImageInput.args = { multiple: false };

export const MultipleImageInput = Story.bind({});

MultipleImageInput.args = {
    multiple: true,
};

export default Component;
