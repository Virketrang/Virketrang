import { GlobalValues } from '../utils';

export default abstract class Transform extends GlobalValues {
    public static matrix(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string) {
        return `matrix(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5})`;
    }

    public static matrix3d(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: string,
        arg4: string,
        arg5: string,
        arg6: string,
        arg7: string,
        arg8: string,
        arg9: string,
        arg10: string,
        arg11: string,
        arg12: string,
        arg13: string,
        arg14: string,
        arg15: string
    ) {
        return `matrix3d(${arg0}, ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5}, ${arg6}, ${arg7}, ${arg8}, ${arg9}, ${arg10}, ${arg11}, ${arg12}, ${arg13}, ${arg14}, ${arg15})`;
    }

    public static perspective(value: string) {
        return `perspective(${value})`;
    }

    public static rotate(value: string) {
        return `rotate(${value})`;
    }

    public static rotate3d(x: string, y: string, z: string, value: string) {
        return `rotate3d(${x}, ${y}, ${z}, ${value})`;
    }

    public static rotateX(x: string) {
        return `rotateX(${x})`;
    }

    public static rotateY(y: string) {
        return `rotateY(${y})`;
    }

    public static rotateZ(z: string) {
        return `rotateZ(${z})`;
    }

    public static translate(x: string, y: string) {
        return `translate(${x}, ${y})`;
    }

    public static translate3d(x: string, y: string, z: string) {
        return `translate3d(${x}, ${y}, ${z})`;
    }

    public static translateX(x: string) {
        return `translateX(${x})`;
    }

    public static translateY(y: string) {
        return `translateY(${y})`;
    }

    public static translateZ(z: string) {
        return `translateZ(${z})`;
    }

    public static scale(x: string, y: string) {
        return `scale(${x}, ${y})`;
    }

    public static scale3d(x: string, y: string, z: string) {
        return `scale3d(${x}, ${y}, ${z})`;
    }

    public static scaleX(x: string) {
        return `scaleX(${x})`;
    }

    public static scaleY(y: string) {
        return `scaleY(${y})`;
    }

    public static scaleZ(z: string) {
        return `scaleZ(${z})`;
    }

    public static skew(x: string, y: string) {
        return `skew(${x}, ${y})`;
    }

    public static skewX(x: string) {
        return `skew(${x})`;
    }

    public static skewY(y: string) {
        return `skew(${y})`;
    }
}
