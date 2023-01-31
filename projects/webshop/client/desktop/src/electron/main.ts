import { app, ipcMain, BrowserWindow } from 'electron';

type Nullable<T> = T | null;

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
