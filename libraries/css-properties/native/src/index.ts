export * from './classes';

declare global {
    interface Number {
        readonly percentage: string;
    }
}

Object.defineProperty(Number.prototype, 'percentage', {
    get value(): string {
        return `${this.valueOf()}%`;
    },
});
