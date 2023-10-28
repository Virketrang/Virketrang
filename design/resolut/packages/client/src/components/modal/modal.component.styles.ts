import { CSSProperties } from 'react'

export default abstract class Stylesheet {
    public static create(arg: CSSProperties) {
        return arg
    }
}
