declare global {
    interface Number {
        rem: () => `${number}rem`;
        em: () => `${number}em`;
        px: () => `${number}px`;
        vw: () => `${number}vw`;
        vh: () => `${number}vh`;
        percentage: () => `${number}%`;
        unit: (unit: string) => `${number}${string}`;
        s: () => `${number}s`;
        ms: () => `${number}ms`;
    }
}

Number.prototype.em = function () {
    return `${this.valueOf()}em`;
};

Number.prototype.rem = function () {
    return `${this.valueOf()}rem`;
};

Number.prototype.px = function () {
    return `${this.valueOf()}px`;
};

Number.prototype.vh = function () {
    return `${this.valueOf()}vh`;
};

Number.prototype.vw = function () {
    return `${this.valueOf()}vw`;
};

Number.prototype.percentage = function () {
    return `${this.valueOf()}%`;
};

Number.prototype.unit = function (unit: string) {
    return `${this.valueOf()}${unit}`;
};

Number.prototype.s = function () {
    return `${this.valueOf()}s`;
};

Number.prototype.ms = function () {
    return `${this.valueOf()}ms`;
};

export * from './classes';
export * from './functions';
