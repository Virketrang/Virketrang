import { app, BrowserWindow } from 'electron';
import Main from './main';
import './reload';

Main.bootstrap(app, BrowserWindow);
