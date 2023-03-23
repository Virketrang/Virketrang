export default abstract class JumpTerm {
    public static get jumpStart() {
        return 'jump-start' as const;
    }

    public static get jumpEnd() {
        return 'jump-end' as const;
    }

    public static get jumpNone() {
        return 'jump-none' as const;
    }

    public static get jumpBoth() {
        return 'jump-both' as const;
    }

    public static get start() {
        return 'start' as const;
    }

    public static get end() {
        return 'end' as const;
    }

    public static get stepStart() {
        return 'step-start' as const;
    }

    public static get stepEnd() {
        return 'step-end' as const;
    }
}
