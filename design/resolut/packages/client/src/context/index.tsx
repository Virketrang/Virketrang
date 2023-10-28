import { createContext } from 'react';

export default function createNewContext(defaultValue: any) {
    const context = createContext(defaultValue);

    return context;
}
