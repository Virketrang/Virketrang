import { GlobalValues } from '../utils';

export default abstract class Cursor extends GlobalValues {
    public static get auto() {
        return 'auto' as const;
    }

    public static get default() {
        return 'default' as const;
    }

    public static get none() {
        return 'none' as const;
    }

    public static get contextMenu() {
        return 'context-menu' as const;
    }

    public static get help() {
        return 'help' as const;
    }

    public static get pointer() {
        return 'pointer' as const;
    }

    public static get progress() {
        return 'progress' as const;
    }

    public static get wait() {
        return 'wait' as const;
    }

    public static get cell() {
        return 'cell' as const;
    }

    public static get crosshair() {
        return 'crosshair' as const;
    }

    public static get text() {
        return 'text' as const;
    }

    public static get verticalText() {
        return 'vertical-text' as const;
    }

    public static get alias() {
        return 'alias' as const;
    }

    public static get copy() {
        return 'copy' as const;
    }

    public static get move() {
        return 'move' as const;
    }

    public static get noDrop() {
        return 'no-drop' as const;
    }

    public static get notAllowed() {
        return 'not-allowed' as const;
    }

    public static get grab() {
        return 'grab' as const;
    }

    public static get grabbing() {
        return 'grabbing' as const;
    }

    public static get allScroll() {
        return 'all-scroll' as const;
    }

    public static get colResize() {
        return 'col-resize' as const;
    }

    public static get rowResize() {
        return 'row-resize' as const;
    }

    public static get nResize() {
        return 'n-resize' as const;
    }

    public static get eResize() {
        return 'e-resize' as const;
    }

    public static get sResize() {
        return 's-resize' as const;
    }

    public static get wResize() {
        return 'w-resize' as const;
    }

    public static get neResize() {
        return 'ne-resize' as const;
    }

    public static get nwResize() {
        return 'nw-resize' as const;
    }

    public static get seResize() {
        return 'se-resize' as const;
    }

    public static get swResize() {
        return 'sw-resize' as const;
    }

    public static get ewResize() {
        return 'ew-resize' as const;
    }

    public static get nsResize() {
        return 'ns-resize' as const;
    }

    public static get neswResize() {
        return 'nesw-resize' as const;
    }

    public static get nwseResize() {
        return 'nwse-resize' as const;
    }

    public static get zoomIn() {
        return 'zoom-in' as const;
    }

    public static get zoomOut() {
        return 'zoom-out' as const;
    }
}
