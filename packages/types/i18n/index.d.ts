import _Locale from './locale'
import _Config from './config'
import _Text from './text'
import _Dictionary from './dictionary'

declare namespace I18N {
    export type Locale = _Locale

    export type Config<T extends readonly string[]> = _Config<T>

    export type Text = _Text

    export type Dictionary<T> = _Dictionary<T>
}

export default I18N
