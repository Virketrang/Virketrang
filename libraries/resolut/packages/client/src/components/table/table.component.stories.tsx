import { Meta, StoryFn } from '@storybook/react'

const Story: Meta<Resolut.Table.Component> = {
    component: Table
}

const Template: StoryFn<Resolut.Table.Component> = ({ ...props }) => <Table {...props} />

export const Basic = Template.bind({})

Basic.args = {
    children: (
        <>
            <Table.Head head={['Navn', 'E-mail']} />
            <Table.Body
                body={{
                    columns: [
                        { name: 'Navn', accessor: 'name' },
                        { name: 'E-mail', accessor: 'email' }
                    ],
                    data: [
                        { name: 'Sigfred Frey Nørgaard Knudsen', email: 'snk@liedeckenoergaard.dk' },
                        { name: 'Isabella Liedecke Mørck', email: 'ilm@liedeckenoergaard.dk' }
                    ]
                }}
            />
        </>
    )
}

export default Story
