import { Dispatch, FunctionComponent, SetStateAction } from 'react'

type DivisionModalComponent = FunctionComponent<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>

export default DivisionModalComponent
