import '../../../public/themes/castlereagh.css'
import '../../../public/styles/index.css'

import '@/packages/fonts/montserrat.css'

import { Parameters } from 'storybook-framework-qwik'

export const parameters: Parameters = {
    a11y: {
        config: {},
        options: {
            checks: { 'color-contrast': { options: { noScroll: true } } },
            restoreScroll: true
        }
    },
    options: {
        showRoots: true
    },
    docs: {
        iframeHeight: '200px'
    }
}
