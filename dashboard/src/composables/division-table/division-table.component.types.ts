import { Entity } from '@packages/index'
import { FunctionComponent } from 'react'

type DivisionTableComponent = FunctionComponent<{ data: Entity.Division.Retrieve[] }>

export default DivisionTableComponent
