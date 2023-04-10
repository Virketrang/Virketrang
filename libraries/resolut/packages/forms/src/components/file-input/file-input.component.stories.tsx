import { Meta, StoryFn } from '@storybook/react';

import FileInput from './file-input.component';

const Component: Meta<typeof FileInput> = { title: 'FileInput', component: FileInput };

const Story: StoryFn<typeof FileInput> = props => <FileInput {...props} />;

export const SingleFileInput = Story.bind({});

SingleFileInput.args = {};

export const MultipleFileInput = Story.bind({});

MultipleFileInput.args = {};

export default Component;
