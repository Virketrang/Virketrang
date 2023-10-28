export type MainProps = Resolut.Component.Props.Layout<'div'> & {}

export type MainRef = React.RefAttributes<HTMLElement>

export type MainComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<MainProps & MainRef>>

export default MainComponent
