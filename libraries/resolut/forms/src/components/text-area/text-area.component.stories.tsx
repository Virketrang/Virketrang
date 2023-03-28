import { Meta, StoryFn } from '@storybook/react';

import TextArea from './text-area.component';

const Story: Meta<typeof TextArea> = { title: 'TextArea', component: TextArea };

const Template: StoryFn<typeof TextArea> = ({ children, ...props }) => <TextArea {...props}>{children}</TextArea>;

export const Default = Template.bind({});

export default Story;
