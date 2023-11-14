export type DynamicProps = React.ComponentPropsWithoutRef<React.ElementType> & { component: React.ElementType }

export type DynamicRef = React.RefAttributes<HTMLElement>

export type DynamicComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<DynamicProps & DynamicRef>>

export default DynamicComponent
