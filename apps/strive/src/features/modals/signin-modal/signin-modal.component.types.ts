import { Dispatch, FunctionComponent, SetStateAction } from 'react'

type SigninModalComponent = FunctionComponent<{ visible: boolean; setVisible: Dispatch<SetStateAction<boolean>> }>

export default SigninModalComponent
