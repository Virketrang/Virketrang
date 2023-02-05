import { app, BrowserWindow } from 'electron';
import { Nullable } from 'packages/types';

let window: Nullable<BrowserWindow> = null;

function createWindow(): void {
    window = new BrowserWindow({
        width: 800,
        height: 800,
        show: false,
    });

    window.loadFile('../index.html');
    window.on('ready-to-show', () => window?.show());
}

app.on('ready', createWindow);
