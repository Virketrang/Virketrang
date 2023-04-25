import { FunctionComponent, ReactNode } from 'react';

const Drawer: FunctionComponent<{ children: ReactNode; placement: 'right' | 'left' }> = ({ children, placement }) => {
    return <aside>{children}</aside>;
};

export default Drawer;
