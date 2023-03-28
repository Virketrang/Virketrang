import { Meta, StoryFn } from '@storybook/react';

import Field from './field.component';
import { Default } from '../form/form.component.stories';
import { useState } from 'react';

const Component: Meta<typeof Field> = {
    title: 'Field',
    component: Field,
};

const Story: StoryFn<typeof Field> = ({ children, ...args }) => {
    const [value, setValue] = useState<string>('');

    return (
        <Default onSubmit={({ name }: any) => setValue(name.value)}>
            <Field {...args}>{children}</Field>
            <button type="submit">Submit</button>
            <span style={{ display: 'block' }}>{value}</span>
        </Default>
    );
};

export const DefaultField = Story.bind({});

DefaultField.args = { children: <input name="name"></input> };

export default Component;
