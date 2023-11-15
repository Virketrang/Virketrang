import TextareaComponent from './textarea.component.types'
import styles from './textarea.component.module.css'

const Textarea: TextareaComponent = memo(({ resize = 'none', className = '', style, ...props }) => {
    const variables = { '--textarea-resize': resize }

    return <textarea className={`${className} ${styles.textarea}`} style={{ ...style, ...variables }} {...props} />
})

Textarea.displayName = Textarea.name

export default Textarea
