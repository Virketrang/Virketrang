import { FunctionComponent, ReactNode } from 'react';
import Item from '../../interfaces/item';

type DashboardComponent = FunctionComponent<{ title: string; items: Item[] }>;

export default DashboardComponent;
