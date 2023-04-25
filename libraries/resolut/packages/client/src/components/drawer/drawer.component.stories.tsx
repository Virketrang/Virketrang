import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Drawer from './drawer.component';
import Slide from '../slide/slide.component';

const Story: Meta<typeof Drawer> = { title: 'Drawer', component: Drawer };

const Template: StoryFn<typeof Drawer> = ({ ...props }) => <Drawer {...props} />;

export const Basic = Template.bind({});

Basic.args = {
    children: (
        <>
            <h1>Indkøbskurv</h1>
        </>
    ),
};

export default Story;
