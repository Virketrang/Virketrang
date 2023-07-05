import UploadFieldComponent from './upload-field.component.types'
import styles from './upload-field.component.module.css'

const UploadField: UploadFieldComponent = memo(({ className = '', upload, ...props }) => {
    const [dragActive, setDragActive] = useState(false)

    const handleDragEnter = (event: React.DragEvent<HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragActive(true)
    }

    const handleDragLeave = (event: React.DragEvent<HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragActive(false)
    }

    const handleDrop = (event: React.DragEvent<HTMLInputElement>) => {
        console.log('DROP')
        event.preventDefault()
        event.stopPropagation()
        setDragActive(false)
        if (event.dataTransfer.files && event.dataTransfer.files[0]) return upload(Array.from(event.dataTransfer.files))
        else return
    }

    const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()
        console.log('DRAGGING')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()
        if (event.target.files && event.target.files![0]) return upload(Array.from(event.target.files))
        else return
    }

    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver}>
            <input
                multiple
                lang="da"
                className={`${className} ${styles.upload} ${dragActive ? styles.active : ''}`}
                {...props}
                type="file"
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onChange={handleChange}
            />
        </div>
    )
})

UploadField.displayName = UploadField.name

export default UploadField
