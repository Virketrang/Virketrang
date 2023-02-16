import { app, BrowserWindow } from 'electron';
import Main from './main';
import './reload';

Main.main(app, BrowserWindow);
