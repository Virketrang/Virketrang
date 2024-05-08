interface UploadFieldProps extends React.ComponentProps<'input'> {
    upload: (files: File[]) => void
}

type UploadFieldComponent = React.FunctionComponent<UploadFieldProps>

export default UploadFieldComponent
