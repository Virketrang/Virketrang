import { Meta, StoryFn } from '@storybook/react';

import Button from './button.component';
import SVG from '../svg/svg.component';

const Story: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        shape: {
            options: ['square', 'round', 'rounded', 'circle'],
            control: { type: 'inline-radio' },
        },
    },
};

const Template: StoryFn<typeof Button> = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const SquareButton = Template.bind({});

SquareButton.args = {
    shape: 'square',
    children: 'Square',
    grow: true,
    size: 'medium',
    stretch: false,
};

export const RoundButton = Template.bind({});

RoundButton.args = {
    shape: 'round',
    children: 'Round',
    grow: true,
    size: 'medium',
    stretch: false,
};

export const IconButton = Template.bind({});

IconButton.args = {
    backgroundColor: 'transparent',
    icon: (
        <SVG color="black" viewBox="0 96 960 960">
            <path d="M220 976q-24 0-42-18t-18-42V396q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480 176q63 0 106.5 43.5T630 326v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520V396H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570 486v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330 486v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220 916V396v520Z" />
        </SVG>
    ),
};

export default Story;
