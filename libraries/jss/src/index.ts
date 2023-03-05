declare global {
    interface Number {
        rem: () => `${number}rem`;
        em: () => `${number}em`;
        px: () => `${number}px`;
        vw: () => `${number}vw`;
        vh: () => `${number}vh`;
    }
}

Number.prototype.em = function () {
    return `${parseInt(this.toString())}em`;
};

Number.prototype.rem = function () {
    return `${parseInt(this.toString())}rem`;
};

Number.prototype.px = function () {
    return `${parseInt(this.toString())}px`;
};

Number.prototype.vh = function () {
    return `${parseInt(this.toString())}vh`;
};

Number.prototype.vw = function () {
    return `${parseInt(this.toString())}vw`;
};

export * from './classes';
export * from './functions';
