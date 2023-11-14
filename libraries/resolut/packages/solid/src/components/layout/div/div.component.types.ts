export type DivProps = Resolut.Component.Props.Layout<'div'> & {}

export type DivRef = React.RefAttributes<HTMLElement>

export type DivComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<DivProps & DivRef>>

export default DivComponent
