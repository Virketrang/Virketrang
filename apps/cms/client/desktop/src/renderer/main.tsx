import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@pages/app.component';

import './styles.sass';
import { Border } from '@virketrang/jss';

console.log(new Border({ width: '1rem', color: 'black', style: 'dotted' }));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
