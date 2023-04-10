import { FunctionComponent, ReactNode } from 'react';

const Demo: FunctionComponent<{ children: ReactNode; color?: string }> = ({ children, color = '#ffffff' }) => {
    return (
        <>
            <div id="demo">{children}</div>
            <style>{`#demo { color: ${color} }`}</style>
        </>
    );
};

export default Demo;
