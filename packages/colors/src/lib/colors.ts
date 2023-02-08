import { Singleton } from './decorators/singleton';

import amber from './colors/amber';
import blue from './colors/blue';
import blueGrey from './colors/blueGrey';
import brown from './colors/brown';
import cyan from './colors/cyan';
import deepOrange from './colors/deepOrange';
import deepPurple from './colors/deepPurple';
import green from './colors/green';
import grey from './colors/grey';
import indigo from './colors/indigo';
import lightBlue from './colors/lightBlue';
import lightGreen from './colors/lightGreen';
import lime from './colors/lime';
import orange from './colors/orange';
import pink from './colors/pink';
import purple from './colors/purple';
import red from './colors/red';
import teal from './colors/teal';
import yellow from './colors/yellow';

import amberAccent from './accents/amberAccent';
import blueAccent from './accents/blueAccent';
import cyanAccent from './accents/cyanAccent';
import deepOrangeAccent from './accents/deepOrangeAccent';
import deepPurpleAccent from './accents/deepPurpleAccent';
import greenAccent from './accents/greenAccent';
import indigoAccent from './accents/indigoAccent';
import lightBlueAccent from './accents/lightBlueAccent';
import lightGreenAccent from './accents/lightGreenAccent';
import limeAccent from './accents/limeAccent';
import orangeAccent from './accents/orangeAccent';
import pinkAccent from './accents/pinkAccent';
import purpleAccent from './accents/purpleAccent';
import redAccent from './accents/redAccent';
import tealAccent from './accents/tealAccent';
import yellowAccent from './accents/yellowAccent';
import { RGBA } from './types/rgba';
import { TRANSPARENT } from './types/transparent';

@Singleton
class Colors {
    public get amber() {
        return amber;
    }

    public get blue() {
        return blue;
    }

    public get blueGrey() {
        return blueGrey;
    }

    public get brown() {
        return brown;
    }

    public get cyan() {
        return cyan;
    }

    public get deepOrange() {
        return deepOrange;
    }

    public get deepPurple() {
        return deepPurple;
    }

    public get green() {
        return green;
    }

    public get grey() {
        return grey;
    }

    public get indigo() {
        return indigo;
    }

    public get lightBlue() {
        return lightBlue;
    }

    public get lightGreen() {
        return lightGreen;
    }

    public get lime() {
        return lime;
    }

    public get orange() {
        return orange;
    }

    public get pink() {
        return pink;
    }

    public get purple() {
        return purple;
    }

    public get red() {
        return red;
    }

    public get teal() {
        return teal;
    }

    public get yellow() {
        return yellow;
    }

    public get amberAccent() {
        return amberAccent;
    }

    public get blueAccent() {
        return blueAccent;
    }

    public get cyanAccent() {
        return cyanAccent;
    }

    public get deepOrangeAccent() {
        return deepOrangeAccent;
    }

    public get deepPurpleAccent() {
        return deepPurpleAccent;
    }

    public get greenAccent() {
        return greenAccent;
    }

    public get indigoAccent() {
        return indigoAccent;
    }

    public get lightBlueAccent() {
        return lightBlueAccent;
    }

    public get lightGreenAccent() {
        return lightGreenAccent;
    }

    public get limeAccent() {
        return limeAccent;
    }

    public get orangeAccent() {
        return orangeAccent;
    }

    public get pinkAccent() {
        return pinkAccent;
    }

    public get purpleAccent() {
        return purpleAccent;
    }

    public get redAccent() {
        return redAccent;
    }

    public get tealAccent() {
        return tealAccent;
    }

    public get yellowAccent() {
        return yellowAccent;
    }

    public get black(): RGBA {
        return 'rgba(0, 0, 0, 1)';
    }
    public get black12(): RGBA {
        return 'rgba(0, 0, 0, 0.12)';
    }
    public get black26(): RGBA {
        return 'rgba(0, 0, 0, 0.26)';
    }
    public get black38(): RGBA {
        return 'rgba(0, 0, 0, 0.38)';
    }
    public get black45(): RGBA {
        return 'rgba(0, 0, 0, 0.45)';
    }
    public get black54(): RGBA {
        return 'rgba(0, 0, 0, 0.54)';
    }
    public get black87(): RGBA {
        return 'rgba(0, 0, 0, 0.87)';
    }
    public get white(): RGBA {
        return 'rgba(255, 255, 255, 1)';
    }
    public get white10(): RGBA {
        return 'rgba(255, 255, 255, 0.10)';
    }
    public get white12(): RGBA {
        return 'rgba(255, 255, 255, 0.12)';
    }
    public get white24(): RGBA {
        return 'rgba(255, 255, 255, 0.24)';
    }
    public get white30(): RGBA {
        return 'rgba(255, 255, 255, 0.30)';
    }
    public get white38(): RGBA {
        return 'rgba(255, 255, 255, 0.38)';
    }
    public get white54(): RGBA {
        return 'rgba(255, 255, 255, 0.54)';
    }
    public get white60(): RGBA {
        return 'rgba(255, 255, 255, 0.60)';
    }
    public get white70(): RGBA {
        return 'rgba(255, 255, 255, 0.70)';
    }
    public get transparent(): TRANSPARENT {
        return 'transparent';
    }
}

export default new Colors();
