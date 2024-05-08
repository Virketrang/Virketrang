import { Nanostore } from '../../common'
import flattenObject from './flatten-object'

const bindInputsToStore = (store: Nanostore<any>, fields: string[]) => {
    fields.forEach((field) => {
        const element = document.getElementById(field) as HTMLInputElement | HTMLSelectElement
        const event = element instanceof HTMLSelectElement ? 'change' : 'input'

        if (!element) return

        element.value = flattenObject(store.get())[field]

        element.addEventListener(event, (event) => {
            const target = event.target as HTMLInputElement
            store.mutate(field, target.value)
        })
    })
}

export default bindInputsToStore
