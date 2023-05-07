import { app, BrowserWindow } from 'electron';
import Main from './main';

Main.bootstrap(app, BrowserWindow);
