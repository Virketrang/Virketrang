interface CSSAttributes {
    'flex'?: boolean | 'center' | 'true'
    'flex:center'?: boolean | string
    'flexDirection'?: 'column' | 'row'
    'flex-direction'?: 'column' | 'row'
    'flex_direction'?: 'column' | 'row'
    'flex-direction:column'?: boolean
    'flex-direction:row'?: boolean | string
    'alignItems'?: 'start' | 'end' | 'center' | 'stretch'
    'align-items'?: 'start' | 'end' | 'center' | 'stretch'
    'align_items'?: 'start' | 'end' | 'center' | 'stretch'
    'align-items:start'?: boolean | string
    'align-items:end'?: boolean | string
    'align-items:center'?: boolean | string
    'align-items:stretch'?: boolean | string
    'alignSelf'?: 'start' | 'end' | 'center' | 'stretch'
    'align-self'?: 'start' | 'end' | 'center' | 'stretch'
    'align_self'?: 'start' | 'end' | 'center' | 'stretch'
    'align-self:start'?: boolean | string
    'align-self:end'?: boolean | string
    'align-self:center'?: boolean | string
    'align-self:stretch'?: boolean | string
    'alignContent'?: 'start' | 'end' | 'center' | 'stretch'
    'align-content'?: 'start' | 'end' | 'center' | 'stretch'
    'align_content'?: 'start' | 'end' | 'center' | 'stretch'
    'align-content:start'?: boolean | string
    'align-content:end'?: boolean | string
    'align-content:center'?: boolean | string
    'align-content:stretch'?: boolean | string
    'justifyContent'?: 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end'
    'justify-content'?: 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end'
    'justify_content'?: 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end'
    'justify-content:center'?: boolean | string
    'justify-content:between'?: boolean | string
    'justify-content:around'?: boolean | string
    'justify-content:evenly'?: boolean | string
    'justify-content:start'?: boolean | string
    'justify-content:end'?: boolean | string

    'textAlign'?: 'start' | 'end' | 'center' | 'justify'
    'text-align'?: 'start' | 'end' | 'center' | 'justify'
    'text_align'?: 'start' | 'end' | 'center' | 'justify'
    'text-align:center'?: boolean | string
    'text-align:start'?: boolean | string
    'text-align:end'?: boolean | string
    'text-align:justify'?: boolean | string
    'textWrap'?: 'normal' | 'balance'
    'text-wrap'?: 'balance'
    'text_wrap'?: 'balance'
    'text-wrap:balance'?: boolean | string

    'background'?: 'none' | 'primary' | 'secondary' | 'tertiary'
    'background:none'?: boolean | string
    'background:primary'?: boolean | string
    'background:secondary'?: boolean | string
    'background:tertiary'?: boolean | string
    'color'?: 'none' | 'primary' | 'secondary' | 'tertiary'
    'color:none'?: boolean | string
    'color:primary'?: boolean | string
    'color:secondary'?: boolean | string
    'color:tertiary'?: boolean | string
    'fill'?: 'none' | 'primary' | 'secondary' | 'tertiary'
    'fill:none'?: boolean | string
    'fill:primary'?: boolean | string
    'fill:secondary'?: boolean | string
    'fill:tertiary'?: boolean | string

    'font-size'?: string
    'fontSize'?: string
    'font_size'?: string
    'font-weight'?:
        | 'thin'
        | 'extra-light'
        | 'light'
        | 'regular'
        | 'medium'
        | 'semi-bold'
        | 'bold'
        | 'extra-bold'
        | 'black'
    'fontWeight'?:
        | 'thin'
        | 'extra-light'
        | 'light'
        | 'regular'
        | 'medium'
        | 'semi-bold'
        | 'bold'
        | 'extra-bold'
        | 'black'
    'font_weight'?:
        | 'thin'
        | 'extra-light'
        | 'light'
        | 'regular'
        | 'medium'
        | 'semi-bold'
        | 'bold'
        | 'extra-bold'
        | 'black'
    'font-weight:thin'?: boolean | string
    'font-weight:extra-light'?: boolean | string
    'font-weight:light'?: boolean | string
    'font-weight:regular'?: boolean | string
    'font-weight:medium'?: boolean | string
    'font-weight:semi-bold'?: boolean | string
    'font-weight:bold'?: boolean | string
    'font-weight:extra-bold'?: boolean | string
    'font-weight:black'?: boolean | string

    'grid'?: boolean | 'center' | 'true'
    'grid:center'?: boolean | string
    'place-items'?: 'center'
    'placeItems'?: 'center'
    'place_items'?: 'center'
    'place-items:center'?: boolean | string

    'elevation'?: 'none' | 1 | 2 | 3 | 4 | 5
    'rd'?: boolean | 'true'
    'circle'?: boolean | 'true'
    'active'?: boolean | 'true'

    'step'?: boolean | 'true'
    'input-field'?: boolean | 'true'
    'inputField'?: boolean | 'true'

    'cursor'?: 'default' | 'pointer'
    'cursor:default'?: boolean
    'cursor:pointer'?: boolean

    'position'?: 'relative' | 'absolute' | 'fixed' | 'sticky'
    'position:relative'?: boolean | string
    'position:absolute'?: boolean | string
    'position:fixed'?: boolean | string
    'position:sticky'?: boolean | string

    'appearance'?: 'none'
    'appearance:none'?: boolean | string
    'user-select'?: 'none' | 'text' | 'all' | 'auto'
    'userSelect'?: 'none' | 'text' | 'all' | 'auto'
    'user_select'?: 'none' | 'text' | 'all' | 'auto'
    'user-select:none'?: boolean | string
    'user-select:text'?: boolean | string
    'user-select:all'?: boolean | string
    'user-select:auto'?: boolean | string

    'uppercase'?: boolean | string
    'lowercase'?: boolean | string
    'capitalize'?: boolean | string
    'underline'?: boolean | string
    'line-through'?: boolean | string
    'overline'?: boolean | string
    'italic'?: boolean | string
    'text-transform'?: 'uppercase' | 'lowercase' | 'capitalize'
    'textTransform'?: 'uppercase' | 'lowercase' | 'capitalize'
    'text_transform'?: 'uppercase' | 'lowercase' | 'capitalize'
    'text-transform:uppercase'?: boolean | string
    'text-transform:lowercase'?: boolean | string
    'text-transform:capitalize'?: boolean | string
    'text-decoration'?: 'underline' | 'line-through' | 'overline'
    'textDecoration'?: 'underline' | 'line-through' | 'overline'
    'text_decoration'?: 'underline' | 'line-through' | 'overline'
    'text-decoration:underline'?: boolean | string
    'text-decoration:line-through'?: boolean | string
    'text-decoration:overline'?: boolean | string
    'font-style'?: 'normal' | 'italic'
    'fontStyle'?: 'normal' | 'italic'
    'font_style'?: 'normal' | 'italic'
    'font-style:normal'?: boolean | string
    'font-style:italic'?: boolean | string

    'overflow'?: 'hidden' | 'visible' | 'scroll' | 'auto'
    'overflow:visible'?: boolean | string
    'overflow:hidden'?: boolean | string
    'overflow:scroll'?: boolean | string
    'overflow:auto'?: boolean | string

    'margin'?: string
    'margin-top'?: string
    'marginTop'?: string
    'margin_top'?: string
    'margin-right'?: string
    'marginRight'?: string
    'margin_right'?: string
    'margin-bottom'?: string
    'marginBottom'?: string
    'margin_bottom'?: string
    'margin-left'?: string
    'marginLeft'?: string
    'margin_left'?: string
    'margin-inline'?: string
    'marginInline'?: string
    'margin_inline'?: string
    'margin-block'?: string
    'marginBlock'?: string
    'margin_block'?: string
    'padding'?: string
    'padding-top'?: string
    'paddingTop'?: string
    'padding_top'?: string
    'padding-right'?: string
    'paddingRight'?: string
    'padding_right'?: string
    'padding-bottom'?: string
    'paddingBottom'?: string
    'padding_bottom'?: string
    'padding-left'?: string
    'paddingLeft'?: string
    'padding_left'?: string
    'padding-inline'?: string
    'paddingInline'?: string
    'padding_inline'?: string
    'padding-block'?: string
    'paddingBlock'?: string
    'padding_block'?: string
    'border-radius'?: string
    'borderRadius'?: string
    'border_radius'?: string
    'size'?: string
    'inset'?: string
    'top'?: string
    'right'?: string
    'bottom'?: string
    'left'?: string
    'gap'?: string
    'height'?: string
    'width'?: string
    'min-height'?: string
    'minHeight'?: string
    'min_height'?: string
    'max-height'?: string
    'maxHeight'?: string
    'max_height'?: string
    'min-width'?: string
    'minWidth'?: string
    'min_width'?: string
    'max-width'?: string
    'maxWidth'?: string
    'max_width'?: string
}

export default CSSAttributes
