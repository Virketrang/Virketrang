import { Meta, StoryFn } from '@storybook/react';

import Typography from './typography.component';

const Story: Meta<typeof Typography> = {
    title: 'Typography',
    component: Typography,
    args: {
        letterSpacing: 'font-letterspacing-4',
        lineHeight: 'font-lineheight-4',
        transform: 'capitalize',
        align: 'center',
    },
    argTypes: {
        transform: {
            control: 'inline-radio',
            options: ['capitalize', 'uppercase', 'lowercase', 'none'],
        },
        align: {
            control: 'inline-radio',
            options: ['center', 'inherit', 'justify', 'left', 'right'],
        },
        element: {
            control: 'inline-radio',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
        },
        variant: {
            control: 'inline-radio',
            options: [
                'heading1',
                'heading2',
                'heading3',
                'heading4',
                'heading5',
                'heading6',
                'subtitle1',
                'subtitle2',
                'body1',
                'body2',
                'caption',
            ],
        },
    },
};

const Template: StoryFn<typeof Typography> = ({ children, ...props }) => <Typography {...props}>{children}</Typography>;

export const Heading1 = Template.bind({});

Heading1.args = { variant: 'heading1', element: 'h1', children: 'Heading1' };

export const Heading2 = Template.bind({});

Heading2.args = { variant: 'heading2', element: 'h2', children: 'Heading2' };

export const Heading3 = Template.bind({});

Heading3.args = { variant: 'heading3', element: 'h3', children: 'Heading3' };

export const Heading4 = Template.bind({});

Heading4.args = { variant: 'heading4', element: 'h4', children: 'Heading4' };

export const Heading5 = Template.bind({});

Heading5.args = { variant: 'heading5', element: 'h5', children: 'Heading5' };

export const Heading6 = Template.bind({});

Heading6.args = { variant: 'heading6', element: 'h6', children: 'Heading6' };

export const Subtitle1 = Template.bind({});

Subtitle1.args = { variant: 'subtitle1', element: 'span', children: 'Subtitle1' };

export const Subtitle2 = Template.bind({});

Subtitle2.args = { variant: 'subtitle2', element: 'span', children: 'Subtitle2' };

export const Body1 = Template.bind({});

Body1.args = { variant: 'body1', element: 'p', children: 'Body1' };

export const Body2 = Template.bind({});

Body2.args = { variant: 'body2', element: 'p', children: 'Body2' };

export default Story;
