import { Component } from 'solid-js'

export default abstract class Resolut {
    public static create<T1, T2 = {}>(component: Component<T2>) {
        return component as T
    }
}
