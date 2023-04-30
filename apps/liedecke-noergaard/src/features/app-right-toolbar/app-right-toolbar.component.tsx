'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@resolut/server';

import { ShoppingCart, Toolbar } from '@components';
import { ShoppingBag } from '@icons';

import AppRightToolbarComponent from './app-right-toolbar.component.types';

const AppRightToolbar: AppRightToolbarComponent = () => {
    const [open, setOpen] = useState(false);
    const [documentReady, setDocumentReady] = useState(false);

    useEffect(() => {
        if (typeof document !== 'undefined') setDocumentReady(true);
    }, [setDocumentReady]);

    return (
        <>
            <Toolbar>
                <Button backgroundColor="transparent" icon={<ShoppingBag />} onClick={() => setOpen(true)} />
            </Toolbar>
            {documentReady && createPortal(<ShoppingCart open={open} setOpen={setOpen} />, document.body)}
        </>
    );
};

export default AppRightToolbar;
