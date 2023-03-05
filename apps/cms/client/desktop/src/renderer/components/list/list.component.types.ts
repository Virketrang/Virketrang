import Item from '../../interfaces/item';
import { FunctionComponent } from 'react';

type ListComponent = FunctionComponent<{ title: string; items: Item[] }>;

export default ListComponent;
