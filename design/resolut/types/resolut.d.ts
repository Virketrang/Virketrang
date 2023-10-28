export {}
declare global {
    namespace Resolut {
        namespace Base {
            type Ref<T> = React.RefAttributes<T>

            type Props<T extends ElementType> = React.ComponentPropsWithoutRef<T>

            type Component<T> = React.MemoExoticComponent<React.ForwardRefExoticComponent<T>>
        }

        namespace Modal {
            interface Props extends Omit<Base.Props<'dialog'>, 'onSubmit'> {
                open: boolean
                styles?: {
                    maxWidth?: string
                    height?: string
                }
                children: React.ReactNode
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
            }

            type Ref = Base.Ref<HTMLDialogElement>

            type Component = Base.Component<Props & Ref>
        }

        namespace Table {
            interface Column {
                name: string
                accessor: string
            }

            interface Options {
                pageSize?: number
                pageIndex?: number
            }

            interface Props extends Base.Props<'table'> {
                children: React.ReactNode
                pagination?: {
                    pageSize?: number
                    page?: number
                }
            }

            type Ref = Base.Ref<HTMLTableElement>

            type Component = Base.Component<Props & Ref>

            namespace Head {
                interface Props extends Base.Props<'thead'> {
                    head: string[]
                }

                type Ref = Base.Ref<HTMLTableSectionElement>

                type Component = Base.Component<Props & Ref>
            }

            namespace Body {
                interface Props extends Base.Props<'tbody'> {
                    body: { columns: Column[]; data: any; options?: Options }
                }

                type Ref = Base.Ref<HTMLTableSectionElement>

                type Component = Base.Component<Props & Ref>
            }
        }

        namespace Pagination {
            interface Props extends Base.Props<'div'> {
                back: () => void
                forward: () => void
                index: number
                pages: number
            }

            type Ref = Base.Ref<HTMLDivElement>

            type Component = Base.Component<Props & Ref>
        }

        namespace Input {
            interface Props extends Base.Props<'input'> {}

            type Ref = Base.Ref<HTMLInputElement>

            type Component = Base.Component<Props & Ref>
        }
    }
}
