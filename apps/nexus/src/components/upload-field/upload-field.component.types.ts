import { ComponentProps, FunctionComponent } from 'react'

interface UploadFieldProps extends ComponentProps<'input'> {
    upload: (files: File[]) => void
}

type UploadFieldComponent = FunctionComponent<UploadFieldProps>

export default UploadFieldComponent
