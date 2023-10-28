import { RGB } from './rgb';
import { RGBA } from './rgba';
import { HEX } from './hex';
import { CMYK } from './cmyk';
import { TRANSPARENT } from './transparent';

type Color = RGB | RGBA | HEX | CMYK | TRANSPARENT;

export default Color;
