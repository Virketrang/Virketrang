export default abstract class $ {
    public static get active() {
        return '&:active' as const;
    }

    public static get anyLink() {
        return '&:any-link' as const;
    }

    public static get autofill() {
        return '&:autofill' as const;
    }

    public static get blank() {
        return '&:blank' as const;
    }

    public static get checked() {
        return '&:checked' as const;
    }

    public static get current() {
        return '&:current' as const;
    }

    public static get default() {
        return '&:default' as const;
    }

    public static get defined() {
        return '&:defined' as const;
    }

    public static dir(direction: 'ltr' | 'rtl') {
        return `&:dir(${direction})`;
    }

    public static get disabled() {
        return '&:disabled' as const;
    }

    public static get empty() {
        return '&:empty' as const;
    }

    public static get enabled() {
        return '&:enabled' as const;
    }

    public static get first() {
        return '&:first' as const;
    }

    public static get firstChild() {
        return '&:first-child' as const;
    }

    public static get firstOfType() {
        return '&:first-of-type' as const;
    }

    public static get fullscreen() {
        return '&:fullscreen' as const;
    }

    public static get future() {
        return '&:future' as const;
    }

    public static get focus() {
        return '&:focus' as const;
    }

    public static get focusVisible() {
        return '&:focus-visible' as const;
    }

    public static get focusWithin() {
        return '&:focus-within' as const;
    }

    public static has(selector: string) {
        return `&:has(${selector})` as const;
    }

    public static get host() {
        return '&:host' as const;
    }

    public static hostContext(selector: string) {
        return `&:host-context(${selector})` as const;
    }

    public static get hover() {
        return '&:hover' as const;
    }

    public static get indeterminate() {
        return '&:indeterminate' as const;
    }

    public static get inRange() {
        return '&:in-range' as const;
    }

    public static get invalid() {
        return '&:invalid' as const;
    }

    public static is(selector: string) {
        return `&:is(${selector})`;
    }

    public static lang(selector: string) {
        return `&:lang(${selector})`;
    }

    public static get lastChild() {
        return '&:last-child' as const;
    }

    public static get lastOfType() {
        return '&:last-of-type' as const;
    }

    public static get left() {
        return '&:left' as const;
    }

    public static get link() {
        return '&:link' as const;
    }

    public static get localLink() {
        return '&:local-link' as const;
    }

    public static get modal() {
        return '&:modal' as const;
    }

    public static not(selector: string) {
        return `&:not(${selector})`;
    }

    public static nthChild(selector: string) {
        return `&:nth-child(${selector})`;
    }

    public static nthCol(selector: string) {
        return `&:nth-col(${selector})`;
    }

    public static nthLastChild(selector: string) {
        return `&:nth-last-child(${selector})`;
    }

    public static nthLastCol(selector: string) {
        return `&:nth-last-col(${selector})`;
    }

    public static nthLastOfType(selector: string) {
        return `&:nth-last-of-type(${selector})`;
    }

    public static nthOfType(selector: string) {
        return `&:nth-of-type(${selector})`;
    }

    public static get onlyChild() {
        return '&:only-child' as const;
    }

    public static get onlyOfType() {
        return '&:only-of-type' as const;
    }

    public static get optional() {
        return '&:optional' as const;
    }

    public static get outOfRange() {
        return '&:out-of-range' as const;
    }

    public static get past() {
        return '&:past' as const;
    }

    public static get pictureInPicture() {
        return '&:picture-in-picture' as const;
    }

    public static get placeholderShown() {
        return '&:placeholder-shown' as const;
    }

    public static get paused() {
        return '&:paused' as const;
    }

    public static get playing() {
        return '&:playing' as const;
    }

    public static get readOnly() {
        return '&:read-only' as const;
    }

    public static get readWrite() {
        return '&:read-write' as const;
    }

    public static get required() {
        return '&:required' as const;
    }

    public static get right() {
        return '&:right' as const;
    }

    public static get root() {
        return '&:root' as const;
    }

    public static get scope() {
        return '&:scope' as const;
    }

    public static get target() {
        return '&:target' as const;
    }

    public static get targetWithin() {
        return '&:target-within' as const;
    }

    public static get userInvalid() {
        return '&:user-invalid' as const;
    }

    public static get valid() {
        return '&:valid' as const;
    }

    public static get visited() {
        return '&:visited' as const;
    }

    public static where(selector: string) {
        return `&:where(${selector})`;
    }

    public static get after() {
        return '&::after' as const;
    }

    public static get backdrop() {
        return '&::backdrop' as const;
    }

    public static get before() {
        return '&::before' as const;
    }

    public static get cue() {
        return '&::cue' as const;
    }

    public static get cueRegion() {
        return '&::cue-region' as const;
    }

    public static get firstLetter() {
        return '&::first-letter' as const;
    }

    public static get firstLine() {
        return '&::first-line' as const;
    }

    public static get fileSelectorButton() {
        return '&::file-selector-button' as const;
    }

    public static get grammarError() {
        return '&::grammar-error' as const;
    }

    public static get marker() {
        return '&::marker' as const;
    }

    public static part(part: string) {
        return `&::part(${part})`;
    }

    public static get placeholder() {
        return '&::placeholder' as const;
    }

    public static get selection() {
        return '&::selection' as const;
    }

    public static slotted(selector: string) {
        return `&::slotted(${selector})`;
    }

    public static get spellingError() {
        return '&::spelling-error' as const;
    }

    public static get targetText() {
        return '&::target-text' as const;
    }

    public static id(id: string) {
        return `#${id}`;
    }

    public static classes(...classes: string[]) {
        return classes.map((className) => `.${className}`).join('');
    }
}
