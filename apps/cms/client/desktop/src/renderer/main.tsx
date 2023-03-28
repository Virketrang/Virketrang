import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import '@virketrang/resolut-react/style.css';

import HttpClient from '@virketrang/http';

HttpClient.baseURL = 'http://127.0.0.1:8080';

import App from '@pages/app.component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig
            value={{
                fetcher: async (...args: any) => {
                    const res = await fetch(args);
                    return await res.json();
                },
                suspense: true,
            }}>
            <App />
        </SWRConfig>
    </React.StrictMode>
);
