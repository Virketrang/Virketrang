import { Meta, StoryFn } from '@storybook/react';

import SelectField from './select-field.component';
import { DefaultOption, DefaultOptionArgs } from '../option/option.component.stories';

const Component: Meta<typeof SelectField> = {
    title: 'SelectField',
    component: SelectField,
};

const Story: StoryFn<typeof SelectField> = ({ children, ...args }) => <SelectField {...args}>{children}</SelectField>;

export const DefaultSelectField = Story.bind({ default: true });

DefaultSelectField.args = { children: <DefaultOption {...DefaultOptionArgs} /> };

export default Component;
