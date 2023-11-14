import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'
import workspaceConfig from '../../../../../vite.workspace'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    env: {},
    core: {},
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    features: {
        storyStoreV7: true
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            define: {
                'process.env': {}
            },
            resolve: workspaceConfig.resolve as any,
            build: {
                minify: false,
                sourcemap: true
            }
        })
    },
    docs: {
        autodocs: true
    },
    staticDirs: ['../../../../../packages/', '../../../public'],
    typescript: {}
}
export default config
