export default abstract class Display {
    public static get none() {
        return 'none' as const;
    }

    public static get flex() {
        return 'flex' as const;
    }
}
