import { FunctionComponent, ReactElement } from 'react';

type ConditionalComponent = FunctionComponent<{ condition: boolean; fallback?: ReactElement; children: ReactElement }>;

export default ConditionalComponent;
