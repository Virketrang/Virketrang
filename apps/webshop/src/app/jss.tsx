'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default function RootStyleRegistry({ children }: { children: ReactNode }) {
    const registry = new SheetsRegistry();

    useServerInsertedHTML(() => {
        return (
            <style type="text/css" id="server-side-styles">
                {registry.toString()}
            </style>
        );
    });

    return (
        <JssProvider
            registry={registry}
            generateId={(rule, sheet) => `${sheet?.options.classNamePrefix}${rule.key ? rule.key : 'default'}`}
        >
            {children}
        </JssProvider>
    );
}
