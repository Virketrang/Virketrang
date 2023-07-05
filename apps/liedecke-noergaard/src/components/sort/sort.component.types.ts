import { Dispatch, FunctionComponent, SetStateAction } from 'react'

type SortComponent = FunctionComponent<{ sortBy: string; setSortBy: Dispatch<SetStateAction<string>> }>

export default SortComponent
