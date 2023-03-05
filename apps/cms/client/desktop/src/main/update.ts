import { autoUpdater } from 'electron-updater';
import { dialog } from 'electron';

autoUpdater.autoDownload = false;

export default class Update {
    static checkForUpdates() {
        Update.updateAvailable();
        Update.updateDownloaded();

        autoUpdater.checkForUpdates();
    }

    private static updateAvailable() {
        autoUpdater.on('update-available', async () => {
            const result = await dialog.showMessageBox({
                type: 'info',
                title: 'Opdatering tilgængelig',
                message: 'En ny version er tilgængelig. Ønsker du at hente opdateringen?',
                buttons: ['Hent', 'Vent'],
            });

            const { response: index } = result;

            if (index !== 0) return false;

            autoUpdater.downloadUpdate();

            return true;
        });
    }

    private static updateDownloaded() {
        autoUpdater.on('update-downloaded', async () => {
            const result = await dialog.showMessageBox({
                type: 'info',
                title: 'Opdatering klar',
                message: 'Ønsker du at installere og genstarte?',
                buttons: ['Ja', 'Vent'],
            });

            const { response: index } = result;

            if (index !== 0) return false;

            autoUpdater.quitAndInstall(false, true);

            return true;
        });
    }
}
