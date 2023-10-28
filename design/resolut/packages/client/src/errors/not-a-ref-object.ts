export default class NotARefObjectError extends Error {
    constructor() {
        super('Carousel Component only accepts ref of type RefObject. The given value was of type function.');
        this.name = 'TypeError';
    }
}
