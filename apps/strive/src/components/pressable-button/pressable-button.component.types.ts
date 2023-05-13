import { Dispatch, FunctionComponent, SetStateAction } from 'react'

type PressableButtonComponent = FunctionComponent<{ setVisible: Dispatch<SetStateAction<boolean>> }>

export default PressableButtonComponent
