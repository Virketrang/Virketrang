export default class NoElementReferencedError extends Error {
    constructor() {
        super('The Carousel component failed to find internal div element');
        this.name = 'UndefinedError';
    }
}
