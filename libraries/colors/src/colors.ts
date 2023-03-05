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
abstract class Colors {
    public static get amber() {
        return amber;
    }

    public static get blue() {
        return blue;
    }

    public static get blueGrey() {
        return blueGrey;
    }

    public static get brown() {
        return brown;
    }

    public static get cyan() {
        return cyan;
    }

    public static get deepOrange() {
        return deepOrange;
    }

    public static get deepPurple() {
        return deepPurple;
    }

    public static get green() {
        return green;
    }

    public static get grey() {
        return grey;
    }

    public static get indigo() {
        return indigo;
    }

    public static get lightBlue() {
        return lightBlue;
    }

    public static get lightGreen() {
        return lightGreen;
    }

    public static get lime() {
        return lime;
    }

    public static get orange() {
        return orange;
    }

    public static get pink() {
        return pink;
    }

    public static get purple() {
        return purple;
    }

    public static get red() {
        return red;
    }

    public static get teal() {
        return teal;
    }

    public static get yellow() {
        return yellow;
    }

    public static get amberAccent() {
        return amberAccent;
    }

    public static get blueAccent() {
        return blueAccent;
    }

    public static get cyanAccent() {
        return cyanAccent;
    }

    public static get deepOrangeAccent() {
        return deepOrangeAccent;
    }

    public static get deepPurpleAccent() {
        return deepPurpleAccent;
    }

    public static get greenAccent() {
        return greenAccent;
    }

    public static get indigoAccent() {
        return indigoAccent;
    }

    public static get lightBlueAccent() {
        return lightBlueAccent;
    }

    public static get lightGreenAccent() {
        return lightGreenAccent;
    }

    public static get limeAccent() {
        return limeAccent;
    }

    public static get orangeAccent() {
        return orangeAccent;
    }

    public static get pinkAccent() {
        return pinkAccent;
    }

    public static get purpleAccent() {
        return purpleAccent;
    }

    public static get redAccent() {
        return redAccent;
    }

    public static get tealAccent() {
        return tealAccent;
    }

    public static get yellowAccent() {
        return yellowAccent;
    }

    public static get black(): RGBA {
        return 'rgba(0, 0, 0, 1)';
    }
    public static get black12(): RGBA {
        return 'rgba(0, 0, 0, 0.12)';
    }
    public static get black26(): RGBA {
        return 'rgba(0, 0, 0, 0.26)';
    }
    public static get black38(): RGBA {
        return 'rgba(0, 0, 0, 0.38)';
    }
    public static get black45(): RGBA {
        return 'rgba(0, 0, 0, 0.45)';
    }
    public static get black54(): RGBA {
        return 'rgba(0, 0, 0, 0.54)';
    }
    public static get black87(): RGBA {
        return 'rgba(0, 0, 0, 0.87)';
    }
    public static get white(): RGBA {
        return 'rgba(255, 255, 255, 1)';
    }
    public static get white10(): RGBA {
        return 'rgba(255, 255, 255, 0.10)';
    }
    public static get white12(): RGBA {
        return 'rgba(255, 255, 255, 0.12)';
    }
    public static get white24(): RGBA {
        return 'rgba(255, 255, 255, 0.24)';
    }
    public static get white30(): RGBA {
        return 'rgba(255, 255, 255, 0.30)';
    }
    public static get white38(): RGBA {
        return 'rgba(255, 255, 255, 0.38)';
    }
    public static get white54(): RGBA {
        return 'rgba(255, 255, 255, 0.54)';
    }
    public static get white60(): RGBA {
        return 'rgba(255, 255, 255, 0.60)';
    }
    public static get white70(): RGBA {
        return 'rgba(255, 255, 255, 0.70)';
    }
    public static get transparent(): TRANSPARENT {
        return 'transparent';
    }
}

export default Colors;
