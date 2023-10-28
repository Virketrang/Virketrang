export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number
}

export type LogoRef = React.RefAttributes<SVGSVGElement>

export type LogoComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<LogoProps & LogoRef>>
