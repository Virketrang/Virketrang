import { GlobalValues } from '../utils';

export default abstract class Display extends GlobalValues {
    public static get block() {
        return 'block' as const;
    }

    public static get inline() {
        return 'inline' as const;
    }

    public static get inlineBlock() {
        return 'inline-block' as const;
    }

    public static get flex() {
        return 'flex' as const;
    }

    public static get inlineFlex() {
        return 'inline-flex' as const;
    }

    public static get grid() {
        return 'grid' as const;
    }

    public static get inlineGrid() {
        return 'inline-grid' as const;
    }

    public static get flowRoot() {
        return 'flow-root' as const;
    }

    public static get none() {
        return 'none' as const;
    }

    public static get contents() {
        return 'contents' as const;
    }

    public static get table() {
        return 'table' as const;
    }

    public static get tableRow() {
        return 'table-row' as const;
    }

    public static get listItem() {
        return 'list-item' as const;
    }
}
