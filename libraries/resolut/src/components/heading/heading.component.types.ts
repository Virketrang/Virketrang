export type HeadingProps = Resolut.Component.Props.Typography<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> & {}

export type HeadingRef = Resolut.Component.Ref<HTMLHeadingElement>

export type HeadingComponent = Resolut.Component<HeadingProps & HeadingRef>

export default HeadingComponent
