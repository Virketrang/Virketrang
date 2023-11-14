export type SectionProps = Resolut.Component.Props.Layout<'section'> & {}

export type SectionRef = React.RefAttributes<HTMLElement>

export type SectionComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<SectionProps & SectionRef>>

export default SectionComponent
