import React from 'react';

import TableComponent from './table.component.types';
import styles from './table.component.module.sass';

const Table: TableComponent = ({ children, className, ...props }) => {
    return (
        <table className={`${styles.table} ${className}`} {...props}>
            {children}
        </table>
    );
};

Table.Head = () => {
    return <thead></thead>;
};

Table.Body = () => {
    return <tbody></tbody>
}

export default Table;
