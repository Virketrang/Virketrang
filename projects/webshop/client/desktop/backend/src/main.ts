import { BrowserWindow, App } from 'electron';
import Update from './update';

export default class Main {
    static mainWindow: BrowserWindow | null;
    static application: App;
    static BrowserWindow: typeof BrowserWindow;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static createWindow() {
        setTimeout(Update.checkForUpdates, 3000);

        Main.mainWindow = new Main.BrowserWindow({
            width: 1200,
            minWidth: 900,
            height: 900,
            minHeight: 600,
            backgroundColor: 'white',
            webPreferences: { nodeIntegration: true, webSecurity: false },
            show: false,
        });

        Main.mainWindow.loadFile(`${__dirname}/../index.html`);

        // Main.mainWindow.loadURL('http://localhost:4200');

        Main.mainWindow.once('ready-to-show', Main.mainWindow.show);

        // Main.mainWindow.webContents.openDevTools();

        Main.mainWindow.on('closed', Main.onClose);
    }

    static bootstrap(app: App, browserWindow: typeof BrowserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;

        Main.application.on('ready', Main.createWindow);
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('activate', Main.createWindow);
    }
}

// main.webContents.on('did-fail-load', () => {
//     main!.loadURL(
//         url.format({
//             pathname: path.join(__dirname, '../index.html'),
//             protocol: 'file:',
//             slashes: true,
//         })
//     );
// });
