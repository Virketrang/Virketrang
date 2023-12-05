import Typography from './typography.component'

const Story: Storybook.Meta<Resolut.Component.TypographyProps> = {
    title: 'Typography',
    component: Typography,
    argTypes: {
        element: {
            control: {
                type: 'select'
            },
            options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'button', 'a']
        }
    }
}

const Template: Storybook.StoryFn<Resolut.Component.TypographyProps> = ({
    ...props
}: Resolut.Component.TypographyProps) => <Typography {...props} />

export const DefaultTypography: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.TypographyProps> =
    Template.bind({})

DefaultTypography.args = {
    children: 'E-mail',
    element: 'p',
    tag: 'paragraph',
    nowrap: false,
    wrap: false,
    balance: false,
    start: false,
    end: false,
    center: false,
    justify: false,
    italic: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    underline: false,
    black: false,
    bold: false,
    dashed: false,
    dotted: false,
    double: false,
    extraBold: false,
    extraLight: false,
    light: false,
    lineThrough: false,
    medium: false,
    overline: false,
    primary: false,
    regular: false,
    secondary: false,
    semiBold: false,
    solid: false,
    thin: false,
    wavy: false,
    blink: false,
    stretch: false
} as Resolut.Component.TypographyProps

export default Story
