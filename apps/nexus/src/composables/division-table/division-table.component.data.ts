import { Column } from '@/common/hooks/table'

export const columns: Column[] = [
    { name: 'Navn', accessor: 'name' },
    { name: 'Kategorier', accessor: 'categories' },
    { name: 'Værktøj', accessor: 'tools' }
]
